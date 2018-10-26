var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var models = require('./models');
const cors = require('cors');

var schema = buildSchema(`
  type User {
    email: String
    name: String
    password: String
    id: ID!
  }

  input UserInput {
    email: String
    password: String
    name: String
  }

  type Query {
    user(id: ID!): User
    verifyUser(email: String, password: String): User
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
  }
`);



var root = {
  user: async function ({id}) {
    const user = await models.User.findById(id)
    if (!user) {
      throw new Error('O usuário de id:' + id + ' não existe.');
    } 
    return user;
  },
  createUser: async function({input}) {
    const sameEmail = await models.User.findAll({
      where: {
        email: input.email
      }
    })
    if(sameEmail.length > 0) {
      console.log(sameEmail)
      throw new Error('O usuário de email: ' + input.email +' já existe.')
    } else {
      const user = await models.User.create(input)
      return user;
    }
    
  },
  updateUser: async function({id,input}) {
    const user = await models.User.findById(id)
    if (!user) {
      throw new Error('no user exists with id ' + id);
    } else {
      const updatedUser = await models.User.update(id,input)
      return updatedUser;
    }
  },
  verifyUser: async function({email, password}){
    const user = await models.User.find({
      where: {
        email: email
      }
    }) 
    if (!user){
      throw new Error("O usuário não existe")
    } else if(!(user.password === password)) {
      throw new Error("O usuário não existe")
    } else { 
      return user
    }
  }
};

models.sequelize.sync();

var app = express();

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'X-Amz-Security-Token', 'x-amz-date'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
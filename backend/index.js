var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

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
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
  }
`);

class User {
  constructor(id, {email,password,name}){
    this.id = id
    this.email = email
    this.password = password
    this.name = name
  }
}

// Maps id to User object
var fakeDatabase = {
  'a': {
    email: 'juares@juares.com',
    name: 'juares',
    password: 'juares',
    id: 'a',
  },
  'b': {
    email: 'tora@tora.com',
    name: 'tora',
    password: 'tora',
    id: 'b',
  },
};

var root = {
  user: function ({id}) {
    if (!fakeDatabase[id]) {
      throw new Error('no user exists with id ' + id);
    } 
    return new User(id,fakeDatabase[id]);
  },
  createUser: function({input}) {
    var id = require('crypto').randomBytes(10).toString('hex');
    fakeDatabase[id] = input;
    return new User(id, input);
  },
  updateUser: function(id,{input}) {
    if (!fakeDatabase[id]) {
      throw new Error('no user exists with id ' + id);
    }
    fakeDatabase[id] = input;
    return new User(id, input);
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
var Sequelize = require('sequelize')

const sequelize = new Sequelize("wandy", "test","123456", {
  host: "localhost",
  dialect: 'postgres'
})

const models = {
    User: sequelize.import('./user'),
}

Object.keys(models).forEach((modelName) => {
    if('associate' in models[modelName]) {
      models[modelName].associate(models)
    }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models;
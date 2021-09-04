const { Sequelize } = require('sequelize')

const Product = require('./models/product')
const Review = require('./models/review')
const User = require('./models/user')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  logging: false,
});

const models = [
  Product,
  Review,
  User
]

for(let model of models){
  model(sequelize)
}

const { products, reviews } = sequelize.models
reviews.belongsTo(products)

module.exports = sequelize
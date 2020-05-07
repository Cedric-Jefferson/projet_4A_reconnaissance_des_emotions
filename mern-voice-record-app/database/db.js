const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('projet_4a_emorecog_bd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  "port": "3308",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

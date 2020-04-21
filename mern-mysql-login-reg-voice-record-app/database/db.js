const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('projet4a_emo_record', 'root', '', {
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

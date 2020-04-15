const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    genre: {
      type: Sequelize.STRING
    },
    tranche_d_age: {
      type: Sequelize.STRING
    },
    pays: {
      type: Sequelize.STRING
    },
    ville: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)

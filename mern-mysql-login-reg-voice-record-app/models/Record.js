const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
  'record',
  {
    id_record: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    record: {
      type: Sequelize.VARBINARY
    },
    version_record: {
      type: Sequelize.STRING
    },
    ref_micro_record: {
      type: Sequelize.STRING
    },
    ref_device_record: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)

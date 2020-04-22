const express = require('express')
const records = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Record = require('../models/Record')
records.use(cors())

process.env.SECRET_KEY = 'secret'

records.post('/save', (req, res) => {
  
  const recordData = {
    record: req.body.record,
    version_record: req.body.version_record,
    ref_micro_record: req.body.ref_micro_record,
    ref_device_record: req.body.ref_device,
  }

  Record.findOne({
    where: {
      record: req.body.record
    }
  })

    .then(record => {
      if (record) {
        Record.create(recordData)
          .then(record => {
            res.json({ status: record.record + ' is Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Record already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = records

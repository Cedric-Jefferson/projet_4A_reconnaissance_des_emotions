const express = require('express')
const records = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Record = require('../models/Record')
records.use(cors())

process.env.SECRET_KEY = 'secret'

records.post('/audiorecorder', (req, res) => {
  
  const recordData = {
    record: req.body.record,
    version_record: req.body.version_record,
    ref_micro_record: req.body.ref_micro_record,
    ref_device_record: req.body.ref_device_record,
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

    .then(recorder => {
      if (recorder) {
        if (bcrypt.compareSync(req.body.record, recorder.record)) {
          let token = jwt.sign(recorder.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'Recorder does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })

})

records.get('/audiolist', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Record.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(record => {
      if (record) {
        res.json(record)
      } else {
        res.send('Record does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = records

/*var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
var serveStatic = require('serve-static'); 

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)*/
//app.use(express.static('./routes/Users'));

/*app.options('./routes/Users/:id', cors()) // enable pre-flight request for DELETE request
app.delete('./routes/Users/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})*/

/*app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})*/

/*// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.email)
})

// POST /users gets JSON bodies
app.post('/users', jsonParser, function (req, res) {
  // create user in req.body
})*/

/*app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})*/


const http        = require('http')
const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = module.exports = express()
const server      = http.createServer(app)
const port        = parseInt(process.env.PORT || 5000)

/*const db = require('./database/db.js')
db.on('error', console.error.bind(console, 'MySQL connection error:'))*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors({origin: true}))

// ADD (MOUNT) YOUR MIDDLEWARE (ROUTES) HERE
var Users = require('./routes/Users')

app.use('/users', Users)
app.use(notFound)
app.use(errorHandler)

server.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

function notFound(req, res, next) {
  res.status(404)
    .send({error: 'Url not found', status: 404, url: req.url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  res.status(500)
    .send({error: err, url: req.url, status: 500})
}
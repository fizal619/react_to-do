'use strict'

const express        = require('express')
const path           = require('path')
const logger         = require('morgan')
const bodyParser     = require('body-parser')
const app            = express()
const PORT           = process.env.PORT || process.argv[2] || 3009

const taskController = require('./routes/tasks')

//setting up directories


//setting up morgan and json parser middleware
app.use(logger('dev'))
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//routes
app.use('/tasks', taskController)

///////////////////////////////////////////////////////

// /: to show a homepage.
app.get('/', function(req,res){
  res.send('route /')
}) //end /

///////////////////////////////////////////////////////

//start the server
app.listen(PORT, function(){
  console.log('Server started in', __dirname)
  console.log('All systems go on', PORT)
})

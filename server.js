'use strict'
const env        = process.env.NODE_ENV || 'development';
const DEV        = env==='development';
const dotenv     = (DEV) ? require('dotenv').config() : undefined;
const express    = require('express')
const path       = require('path')
const logger     = require('morgan')
const bodyParser = require('body-parser')
const app        = express()
const PORT       = process.env.PORT || process.argv[2] || 3009

const taskController = require('./routes/tasks')

//setting up directories


//setting up morgan and json parser middleware
app.use(logger(DEV? 'dev' : 'common'))
app.use( bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'dist')));


//routes
app.use('/tasks', taskController)

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

//start the server
app.listen(PORT, function(){
  console.log('Server started in', __dirname)
  console.log('All systems go on', PORT)
})

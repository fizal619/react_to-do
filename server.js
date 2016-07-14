'use strict'

const express = require('express')
const path    = require('path')
const logger  = require('morgan')

const app     = express()
const PORT    = process.env.PORT || process.argv[2] || 3009

//setting up directories


//setting up morgan and json parser middleware
app.use(logger('dev'))


//routes

// /tasks/:id: to view/edit/delete ONE task.
app.get('/tasks/:id', function(req,res){
  res.send(' view ' + req.params.id)
}) //end /

app.put('/tasks/:id', function(req,res){
  res.send('put ' + req.params.id)
}) //end /

app.delete('/tasks/:id', function(req,res){
  res.send(' delete ' + req.params.id)
}) //end /

///////////////////////////////////////////////////////

// /tasks: to create a task or list tasks (depending on the HTTP verb used [see wiki link]).

app.get('/tasks', function(req,res){
  res.send('get /tasks')
}) //end /

app.post('/tasks', function(req,res){
  res.send('post /tasks')
}) //end /

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

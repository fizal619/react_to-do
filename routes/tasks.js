'use strict'

//temp storage
let tasks = ['bro']

//require express router
const router = require('express').Router()

// /:id: to view/edit/delete ONE task.
router.get('/:id', function(req,res){
  res.send(tasks[req.params.id])
}) //end /

router.put('/:id', function(req,res){
  task[req.params.id] = req.body.line
  res.send('put ' + req.params.id)
}) //end /

router.delete('/:id', function(req,res){
  tasks.splice(req.params.id,1)
  res.send(' delete ' + req.params.id)
}) //end /

///////////////////////////////////////////////////////

// /tasks: to create a task or list tasks (depending on the HTTP verb used [see wiki link]).

router.get('/', function(req,res){
  console.log(tasks)
  res.json(tasks)
}) //end /

router.post('/', function(req,res){
  tasks.push(req.body.line)
  res.send('done')
}) //end /


//export it
module.exports = router

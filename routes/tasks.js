'use strict'
const {getTasks, addTask, updateTask, deleteTask} = require('../models/task')


//temp storage
let tasks = ['bro']

//require express router
const router = require('express').Router()

// /:id: to view/edit/delete ONE task.
router.put('/:id', updateTask, function(req,res){
  task[req.params.id] = req.body.line
  res.send('put ' + req.params.id)
}) //end /

router.delete('/:id',deleteTask , function(req,res){
  tasks.splice(req.params.id,1)
  res.send(' delete ' + req.params.id)
}) //end /

///////////////////////////////////////////////////////

// /tasks: to create a task or list tasks (depending on the HTTP verb used [see wiki link]).

router.get('/', getTasks, function(req,res){
  res.json(res.rows)
}) //end /

router.post('/', addTask, function(req,res){
  tasks.push(req.body.line)
  res.send('done')
}) //end /


//export it
module.exports = router

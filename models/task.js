'use stict'
const pg = require('pg-promise')({
  // Initialization Options
});
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const _db = pg(config);





module.exports = {
  getTasks(req,res,next){
    _db.any(`select * from tasks`)
    .then(data=>{
      res.rows = data
      next()
    })
    .catch(error=>{
      console.log(error)
    })
  },

  addTask(req,res,next){
    _db.any(`insert into tasks(task_name,task_desc) values($/name/, $/desc/) returning *;`, req.body)
    .then(task=>{
      console.log('add')
      res.rows = task
      next()
    })
    .catch(error=>{
      console.log(error)
    })
  },

  updateTask(req,res,next){
    req.body.tID = Number.parseInt(req.params.id)
    req.body.completed = !!req.body.completed
    _db.any(`update tasks set task_name=$/name/,task_desc=$/desc/,completed=$/completed/ where task_id=$/tID/ returning *;`, req.body)
    .then(task=>{
      console.log('add')
      res.rows = task
      next()
    })
    .catch(error=>{
      console.log(error)
    })
  },

  deleteTask(req,res,next){
    req.body.tID = Number.parseInt(req.params.id)
    _db.any(`delete from taks where task_id=$/tID/  returning *;`, req.body)
    .then(task=>{
      console.log('add')
      res.rows = task
      next()
    })
    .catch(error=>{
      console.log(error)
    })
  }

}

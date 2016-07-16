import React from 'react';

export default function TaskForm(props){

  //handle submit
  function handleSubmit(event){
    event.preventDefault()
    props.addTask(event)
  }

  return(
    <section className="jumbotron">
      <h1>Task Manager</h1>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
          <input type="text" name="name" className="form-control input-lg" id="exampleInputEmail3" placeholder="Task Name" />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
          <input type="text" name="desc" className="form-control input-lg" id="exampleInputPassword3" placeholder="Task Description" />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Save</button>
      </form>
    </section>
)
}

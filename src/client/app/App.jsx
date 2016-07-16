'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'
import TaskList         from './TaskList.jsx'

// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          tasks : {}
        }

    }
    //add a task
    addTask(newTask){
      let name = newTask.target.name.value
      let desc = newTask.target.desc.value
      let id = Date.now()

      this.state.tasks[id] = {taskid: id, name: name, desc: desc, completed:false }
      this.setState({tasks: this.state.tasks})
    }
    // note that classes do **not** have commas between their methods

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <header>
                    <Nav />
                </header>
                <div className="container">
                    <TaskForm addTask={this.addTask.bind(this)} />
                    <div className="row">
                    <TaskList />
                    <TaskList />
                    {/*everything goes in here*/}
                    </div>
                </div>
                <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))

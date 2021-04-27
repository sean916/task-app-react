import React, { Component } from "react"
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      task: { text: '', id: uniqid(), count: 0},
      tasks: [],
      taskCount: 0
    };
  };
  
  
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        count: this.state.taskCount
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '', id: uniqid(), count: this.state.taskCount + 1, handleDelete: this.handleDelete },
      taskCount: this.state.tasks.length + 1
    })
  };

  handleDelete(id) {
    function prevDef(e) {
      e.preventDefault();
      console.log('hello')
    }
    
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !== id)
    })
  }

   render() { 

    const { task, tasks } = this.state;

    return (
      <div className='container'>
        <form>
          <label htmlFor='userInput'>Task: </label>
          <input type='text' id='userInput' onChange={this.handleChange} value={task.text}></input>
          <button onClick={this.onSubmit}>Submit</button>
          <br></br>
          <Overview tasks={tasks} handleDelete={this.handleDelete} />
        </form>
      </div>
    );
   }
}

export default App;

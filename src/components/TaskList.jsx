import React from 'react';
import { TaskListContainer } from '../TaskList';

export class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: ''
    };
  }

  changing = (event) => {
    this.setState({ task: event.target.value });
  };

  addTask = () => {
    if (this.state.task.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.task],
        task: ''
      }));
    }
  };

  delete = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <TaskListContainer>
        <h1>Task List</h1>
        <input
          type="text"
          value={this.state.task}
          onChange={this.changing}
          placeholder="Enter a new task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <h2>{task}</h2>
              <button onClick={() => this.delete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </TaskListContainer>
    );
  }
}
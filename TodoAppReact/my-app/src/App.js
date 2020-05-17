import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SubmitForm from "./components/SubmitForm"

class App extends React.Component {
  state = {
    tasks: []
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="container">
          <Header numTodos={this.state.tasks.length} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
      </div>
      </div>
    )
  }
  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
}
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }
}


export default App;

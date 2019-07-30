import React, { Component } from 'react';

import ToDoContainer from './ToDoContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    state = {
      toDos: []
    }
  }

  addToDo(toDo) {
    const { toDos } = this.state
    const newToDo = {...toDo, id: Date.now()}

    this.setState({
      toDos: [newToDo, ...toDos]
    })
  }

  deleteToDo(id) {
    const { toDos } = this.state
    const newToDos = toDos.filter(toDo => toDo.id !== id)

    this.setState({
      toDos: newToDos
    })
  }

  render(){
    const { toDos } = this.state

    return (
      <div className="App">
        <h1>ToDo App</h1>
        <ToDoForm addToDo={addToDo} />
        <ToDoContainer toDos={toDos} deleteToDo={deleteToDo} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import AddTodo from "../containers/AddTodo";
import Todo from "../containers/Todo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <Todo />
      </div>
    );
  }
}

export default App;

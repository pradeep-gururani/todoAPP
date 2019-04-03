import React, { Component } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddTodo from "../containers/AddTodo";
import Todo from "../containers/Todo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <Todo />
        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}

export default App;

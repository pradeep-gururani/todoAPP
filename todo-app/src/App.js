import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import Notify, { AlertTypes } from './services/Notify';
let uid = require('uuid4');
let click = 0;
let todoData;
if (localStorage.getItem("localData") === null) {
  todoData = [
    { id :uid(),task: "learn react", complete: "yes" },
    { id :uid(),task: "component creation", complete: "yes" },
    { id :uid(),task: "form creation", complete: "no" },
    { id :uid(),task: "todoAPP", complete: "no" }
  ];
} else {
  todoData = JSON.parse(localStorage.getItem("localData"));
}

class TodoAPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: todoData};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    console.log("state", this.state);
  }

  // Notify.notifications.subscribe((alert) => alert instanceof Function && alert());
  
  handleSubmit(todo) {
    console.log(todo);
    if (todo === "") {
      notify() => this.toastId = toast("plesae enter a todo");
    } else {
      if (click === 0) {
        click++;
        this.setState({
          tasks: [...this.state.tasks, todo]
        });
        let newData = [...this.state.tasks, todo];
        localStorage.setItem("localData", JSON.stringify(newData));
        console.log(
          "updated localdata",
          JSON.parse(localStorage.getItem("localData"))
        );
      } else {
        // alert("you have already added that todo..!");
        this.notifyError = () => {
          Notify.sendNotification('you have already added that todo..!', AlertTypes.error);
        }
        window.location.reload();
      }
    }
  }

  handleUpdate(task){
    let newState = this.state.tasks;
    for(let id in newState){
      if((newState[id].id === task)&&(newState[id].complete ==="no")){
        newState[id].complete = "yes";
        this.setState({
          tasks: newState
        });
        localStorage.setItem("localData", JSON.stringify(newState));
        break;
      }
      else{
      }
    }
  }
  

  render() {
    return (
      <div className="todoAPP">
        <h3>Todo App</h3>
        <Todo data={this.state.tasks}
          toggleModal = {this.toggleModal}
          handleUpdate = {this.handleUpdate} 
        />
        <AddTodo
          data = {this.state.tasks}
          updateState = {this.updateState}
          handleSubmit = {this.handleSubmit}
        />
        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}

export default TodoAPP;

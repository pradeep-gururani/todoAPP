import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Notify, { AlertTypes } from "./services/Notify";
// import Main from './Main';
let uid = require("uuid4");
let click = 0;
let todoData;
const DATASTORE = require("./services/DataStore");
const GETDATA = require("./services/GetData");

if (GETDATA("localData") === null) {
  todoData = [
    { id: uid(), task: "learn react", complete: "yes", checked: true },
    { id: uid(), task: "component creation", complete: "yes" ,checked: true},
    { id: uid(), task: "form creation", complete: "no", checked: false },
    { id: uid(), task: "todoAPP", complete: "no", checked: false }
  ];
} else {
  todoData = JSON.parse(localStorage.getItem("localData"));
}

class TodoAPP extends React.Component {
  componentDidMount() {
    Notify.notifications.subscribe(
      alert => alert instanceof Function && alert()
    );
  }
  constructor(props) {
    super(props);
    this.state = { tasks: todoData };
    console.log("state", this.state);
  }

  notifyError = message => {
    Notify.sendNotification(message, AlertTypes.error);
  };
  notifySuccess = message => {
    Notify.sendNotification(message, AlertTypes.success);
  };
  notifyInfo = message => {
    Notify.sendNotification(message, AlertTypes.info);
  };
  editTodo = (newVal) =>{
    this.setState({
      tasks: newVal
    });
  }

  handleSubmit = (todo) => {
    console.log(todo);
    if (todo === "") {
      this.notifyError("please enter a todo!");
    } else {
      if (click === 0) {
        click++;
        this.setState({
          tasks: [...this.state.tasks, todo]
        });
        this.notifySuccess("data submitted successfully!");
        let newData = [...this.state.tasks, todo];
        DATASTORE(newData);
        console.log("updated localdata", JSON.parse(GETDATA("localData")));
      } else {
      }
    }
  }



  handleDelete = (element) => {
      let delState = this.state.tasks;
      for (let i in this.state.tasks){
        if(delState[i].id === element){
            delState.splice(i,1);           
            break;
        }
      }
      this.setState({
        tasks: delState
      });
      DATASTORE(delState);
  }

  handleUpdate = (task) => {
    let newState = this.state.tasks;
    for (let id in newState) {
      if (newState[id].id === task && newState[id].complete === "no") {
        newState[id].complete = "yes";
        newState[id].checked = true;
        this.setState({
          tasks: newState
        });
        DATASTORE(newState);
        this.notifyInfo("data updated successfully!");
        break;
      } else {
      }
    }
  }

  render() {
    return (
      <div className="todoAPP">
        <h3>Todo App</h3>
        <Todo
          data={this.state.tasks}
          editTodo={this.editTodo}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        <AddTodo
          data={this.state.tasks}
          updateState={this.updateState}
          handleSubmit={this.handleSubmit}
          notify={this.notify}
        />
        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}

export default TodoAPP;
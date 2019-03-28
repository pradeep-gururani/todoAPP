import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Notify, { AlertTypes } from "./services/Notify";
let uid = require("uuid4");
let todoData;
const DATASTORE = require("./services/DataStore");
const GETDATA = require("./services/GetData");

if (GETDATA("localData") === null) {
  todoData = [
    { id: uid(), task: "learn react", checked: true, edit: "" },
    { id: uid(), task: "component creation", checked: true, edit: "" },
    { id: uid(), task: "form creation", checked: false, edit: "" },
    { id: uid(), task: "todoAPP", checked: false, edit: "" }
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
    this.state = { tasks: todoData, inEditMode: null, change: null };
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

  editTodo = editID => {
    this.setState({
      inEditMode: editID
    });
  };

  removeId = editID => {
    this.setState({
      inEditMode: null
    });
  };

  handleSubmit = todo => {
    if (todo === "") {
      this.notifyError("please enter a todo!");
    } else {
      this.setState({
        tasks: [...this.state.tasks, todo]
      });
      this.notifySuccess("data submitted successfully!");
      let newData = [...this.state.tasks, todo];
      DATASTORE(newData);
    }
  };

  taskEdit = e => {
    this.setState({
      inEditMode: e
    });
  };

  handleDelete = element => {
    let delState = this.state.tasks;
    for (let i in this.state.tasks) {
      if (delState[i].id === element) {
        delState.splice(i, 1);
        break;
      }
    }
    this.setState({
      tasks: delState
    });
    DATASTORE(delState);
    this.notifyInfo("data deleted successfully!");
  };

  handleUpdate = task => {
    let newState = this.state.tasks;
    for (let id in newState) {
      if (newState[id].id === task) {
        if (newState[id].checked) {
          newState[id].checked = false;
        } else {
          newState[id].checked = true;
        }

        this.setState({
          tasks: newState
        });
        DATASTORE(newState);
        this.notifyInfo("data updated successfully!");
        break;
      }
    }
  };

  taskChange = newdata => {
    this.setState({
      change: newdata
    });
  };
  taskUpdate = task => {
    let index;
    let updState = this.state.tasks;
    for (let t in updState) {
      if (updState[t].id === task) {
        index = t;
      }
    }
    updState[index].task = this.state.change;
    this.setState({
      tasks: updState,
      inEditMode: null
    });
    DATASTORE(updState);
    this.notifyInfo("data updated successfully!");
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="todoAPP">
        <h3>Todo App</h3>
        <Todo
          inEditMode={this.state.inEditMode}
          data={this.state.tasks}
          taskEdit={this.taskEdit}
          change={this.state.change}
          taskChange={this.taskChange}
          removeId={this.removeId}
          editTodo={this.editTodo}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
          taskUpdate={this.taskUpdate}
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

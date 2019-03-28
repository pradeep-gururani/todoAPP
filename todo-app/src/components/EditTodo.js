import React, { Component } from "react";
import Notify, { AlertTypes } from "../services/Notify";
const DATASTORE = require("../services/DataStore");
const GETDATA = require("../services/GetData");
let storedData;

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskToUpdate: ""
    };
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

  handleEdit = (toEdit, id) => {
    // this.state.taskToUpdate = toEdit;
    storedData = JSON.parse(GETDATA("localData"));
    let findVal = this.findData(storedData, id);
    findVal.task = toEdit;
  };

  handleSave = storedData => {
    DATASTORE(storedData);
    // this.editTodo(JSON.parse(GETDATA("localData")));
    this.notifyInfo("data updated successfully!");
  };
  findData = (todoData, id) => {
    for (let i in todoData) {
      if (todoData[i].id === id) {
        return todoData[i];
      }
    }
  };

  render() {
    const id = this.props.match.params.id;
    let editVal;
    let todoData = JSON.parse(GETDATA("localData"));
    let findVal = this.findData(todoData, id);
    editVal = findVal.task;

    console.log(todoData);
    return (
      <div className="EditTodo">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSave(storedData);
          }}
        >
          <h6>EditTodo</h6>
          <input
            type="text"
            className="form-control"
            placeholder={editVal}
            onChange={e => {
              e.preventDefault();
              this.handleEdit(e.target.value, id);
            }}
          />

          <input type="submit" value="update" className="button" />
        </form>
      </div>
    );
  }
}

export default EditTodo;

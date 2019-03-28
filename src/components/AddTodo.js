import React from "react";
let validTodo = "form-control";
let uid = require('uuid4');
let newTask = '';
class AddTodo extends React.Component {
  handleChange = (event) => {
    newTask = event.target.value;  
    validTodo = event.target.value === ""
        ? "form-control border border-danger"
        : "form-control";
    console.log("va", validTodo);
    console.log(event.target.value);
    if (newTask === "" ) {
      alert("please enter a todo");
    } else {
      newTask = {id:uid(), task: `${event.target.value}`, complete: "no", checked: false };
    }
  }

  render() {
    return (
      <div className="Todoform">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(newTask);
            console.log(newTask);
        }}
        >        
          <h6>Todo</h6>
          <input
            type="text"
            id="input"
            placeholder="your todo.."
            onChange={this.handleChange}
            className={validTodo}
          />
          <input
            type="submit"
            className="button"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
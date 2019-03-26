import React from "react";
let validTodo = "form-control";
let uid = require('uuid4');
let newTask = '';
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    newTask = event.target.value;  
    validTodo = event.target.value === ""
        ? "form-control border border-danger"
        : "form-control";
    console.log("va", validTodo);
    console.log(event.target.value);
    if (newTask === "" ) {
      alert("please enter a todo");
    } else {
      newTask = {id:uid(), task: `${event.target.value}`, complete: "no" };
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
          {console.log("e", this.props.data)}
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
            onClick={e => {
                e.preventDefault();
                this.notify;
              }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;

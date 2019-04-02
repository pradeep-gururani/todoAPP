import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="Todoform">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <h6>Todo</h6>
        <input
          type="text"
          ref={node => (input = node)}
          placeholder="your todo.."
          className="form-control"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default connect()(AddTodo);

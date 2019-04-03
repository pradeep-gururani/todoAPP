import React from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {
  toggleEdit,
  deleteTodo,
  updateTodo,
  cancleEdit,
  checkTodo
} from "../actions";

const TodoItem = ({ todo, dispatch }) => {
  let updateText;
  console.log(todo);
  return (
    // <div>
    //   <ul>

    todo.map(todo => (
      //     // <li key={todo.id}>{todo.text}</li>

      <div key={todo.id} className="input-group">
        {todo.inEditMode === null || todo.id !== todo.inEditMode ? (
          <span className="d-inline-block">
            <div class="">
              <input
                type="checkbox"
                checked={todo.checked === true ? true : false}
                onChange={e => {
                  e.preventDefault();
                  dispatch(checkTodo(todo.id));
                }}
              />
            </div>
            <span className="todoText">{todo.text}</span>
            <span className="">
              <button
                className="btn btn-info mr-1"
                onClick={e => {
                  e.preventDefault();
                  dispatch(toggleEdit(todo.id));
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={e => {
                  e.preventDefault();
                  dispatch(deleteTodo(todo.id));
                }}
              >
                Delete
              </button>
            </span>
          </span>
        ) : (
          <span>
            <div class="">
              <input
                type="checkbox"
                checked={todo.checked === true ? true : false}
                onChange={e => {
                  e.preventDefault();
                  dispatch(checkTodo(todo.id));
                }}
              />
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                dispatch(updateTodo(todo.id, updateText.value));
              }}
            >
              <input
                type="text"
                required
                placeholder={todo.text}
                ref={node => (updateText = node)}
              />
              <span className="">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-info  align-top mr-1"
                />
                <button
                  className="btn btn-danger edit"
                  onClick={e => {
                    e.preventDefault();
                    dispatch(cancleEdit(todo.id));
                  }}
                >
                  Cancle
                </button>
              </span>
            </form>
          </span>
        )}
      </div>
    ))
  );
};

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps)(TodoItem);

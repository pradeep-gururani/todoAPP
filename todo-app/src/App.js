import React from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
let todoData = [
    {"task":"learn react","complete":"yes"},
    {"task":"component creation","complete":"yes"},
    {"task":"form creation","complete":"no"},
    {"task":"todoAPP","complete":"no"}
];
class TodoAPP extends React.Component {
  render() {
    return (
      <div className="todoAPP">
          <h3>Todo App</h3>
          <Todo data = {todoData}/> 
          <AddTodo />
      </div>
    );
  }
}
 
export default TodoAPP;
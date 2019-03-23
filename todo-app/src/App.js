import React from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

if (localStorage.getItem("localData") === null) {
  var todoData = [
    {"task":"learn react","complete":"yes"},
    {"task":"component creation","complete":"yes"},
    {"task":"form creation","complete":"no"},
    {"task":"todoAPP","complete":"no"}
];

}
else{
   todoData = JSON.parse(localStorage.getItem("localData"));
}

class TodoAPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = todoData;
  }
  render() {
    return (
      <div className="todoAPP">
          <h3>Todo App</h3>
          <Todo data = {this.state}/> 
          <AddTodo data = {this.state} />
      </div>
    );
  }
}
 
export default TodoAPP;
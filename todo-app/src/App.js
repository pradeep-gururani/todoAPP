import React from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
var click = 0;
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
      this.state = {"tasks":todoData};
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log('state',this.state);
  }
       
  handleSubmit(event) {       
      console.log(event);
      if(event === ''){
          alert('plesae enter a todo');
      }
      else{
          if(click === 0){
              click ++;
              this.setState({
                tasks:[...this.state.tasks,event]          
              });
              let newData = [...this.state.tasks,event];           
              localStorage.setItem('localData', JSON.stringify(newData));
              console.log('updated localdata',JSON.parse(localStorage.getItem("localData")));  
          }   
          else {
            alert('you have already added that todo..!');
            window.location.reload();
          }     
      }
      
  }

  render() {
    return (
      <div className="todoAPP">
          <h3>Todo App</h3>
          <Todo data = {this.state.tasks}/> 
          <AddTodo data = {this.state.tasks} 
                  updateState = {this.updateState}
                  handleSubmit = {this.handleSubmit}

          />
      </div>
    );
  }
}
 
export default TodoAPP;
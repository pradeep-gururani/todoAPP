import React from "react";
import { Link} from 'react-router-dom';
import EditTodo from "./EditTodo";

class Todo extends React.Component {
  render() {
    let func = this.props;
    const routes = [
      {
        path: "/EditTodo/:id",
        component: EditTodo,
        render: {props: func.editTodo}
      }
    ];

    return (
      <div className="todoMain">
        {this.props.data.map(function(dat) {
          if (dat.complete === "yes") {      
            return (
              <div key={dat.task} >
                <input
                  type="checkbox"
                  className="mr-1"
                  defaultChecked = {dat.checked}                  
                  onClick={e => {
                    e.preventDefault();
                    func.handleUpdate(dat.id);
                  }}
                />
                <span className = "Todoval">{dat.task}</span>
                <span className="badge badge-pill badge-secondary float-right">
                  complete
                </span>
                <span>
                <button className = "btn btn-info float-right edit">
                 <Link to={{pathname:'/EditTodo/'+dat.id}} >Edit</Link>                   
                </button>
                <span className = "btn btn-danger float-right align-top" onClick= {e => {
                e.preventDefault(); func.handleDelete(dat.id);}} >
                  delete
                </span>                
                </span>
              </div>
            );
          } else {          
            return (  
              <div key={dat.task}>
                <input
                  type="checkbox"
                  className="mr-1"
                  defaultChecked = {dat.checked}
                  onClick={e => {
                    e.preventDefault();
                    func.handleUpdate(dat.id);
                  }}
                />
                {dat.task}
                <button className = "btn btn-info float-right edit">
                 <Link to={{pathname:'/EditTodo/'+dat.id}} >Edit</Link>                   
                </button>
                <span className = "btn btn-danger float-right align-top" onClick= {e => {
                e.preventDefault(); func.handleDelete(dat.id);}} >
                  delete
                </span>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Todo;
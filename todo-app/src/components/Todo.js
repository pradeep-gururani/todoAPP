import React from 'react';

class Todo extends React.Component{
    render(){
      return(
        <div className="todoMain">
                {   this.props.data.map(function(dat){
                        if(dat.complete === 'yes'){
                            return (<div key={dat.task} ><input type="checkbox" className="mr-1" defaultChecked/>{dat.task}<span className="badge badge-pill badge-secondary float-right">complete</span></div>)    
                        }
                        else{
                            return (<div key={dat.task}><input type="checkbox" className="mr-1"/>{dat.task}</div>)
                        }
                    })
                }
        </div>
      );
    }
  }

  export default Todo;
  
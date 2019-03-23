import React from 'react';

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
    render(){
      return(
        <div className="todoDiv">
          <ul className="todoMain">
                {   this.props.data.map(function(dat){
                        if(dat.complete === 'yes'){
                            return (<li key={dat.task}><input type="checkbox" className="mr-1" defaultChecked/>{dat.task}<span className="badge badge-pill badge-secondary float-right">complete</span></li>)    
                        }
                        else{
                            return (<li key={dat.task}><input type="checkbox" className="mr-1"/>{dat.task}</li>)
                        }
                    })
                }
          </ul>
        </div>
      );
    }
  }

  export default Todo;
  
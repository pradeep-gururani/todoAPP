import React from 'react';

class AddTodo extends React.Component {
    constructor(){
        super();
        this.state={
            "task":"",
            "complete":"no"
        };
    }
    state = {  }
    render() { 
        return (  
            <div className="Todoform">
                <form>
                    <h6>Todo</h6>
                    <input type={"text"} placeholder="your todo.." onChange = "" className="form-control"/>
                    <input type={"submit"} className="button" onClick = "handleSubmit"/>
                </form>
            </div>
        );
    }
    
}

export default AddTodo;
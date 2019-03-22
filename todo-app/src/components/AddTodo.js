import React from 'react';

class AddTodo extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="Todoform">
                <form>
                    <h6>Todo</h6>
                    <input type={"text"} placeholder="your todo.." className="form-control"/>
                    <input type={"submit"} className="button"/>
                </form>
            </div>
        );
    }
}

export default AddTodo;
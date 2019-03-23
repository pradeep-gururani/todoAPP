import React from 'react';
    var validTodo = "form-control";

class AddTodo extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {  "task": '',
                        "complete":"no",
                     };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    handleChange(event) {
        validTodo = (event.target.value === '') ? "form-control border border-danger" : "form-control";
        this.setState({task: event.target.value});
        console.log('',validTodo );
        
    }        
    handleSubmit(event) {    
        event.preventDefault();    
        console.log('', this.state.task);
        if(this.state.task === ''){
            alert('plesae enter a todo');
        }
        else{
            alert('Your new task is: ' + this.state.task);
           
        }
    }

    render(){ 
        return (  
            <div className="Todoform">
                <form onSubmit={this.handleSubmit}>
                    <h6>Todo</h6>
                    <input type={"text"} id = "input" value = {this.state.task} placeholder="your todo.." onChange = {this.handleChange} className={validTodo}/>
                    <input type={"submit"} className="button" />
                </form>
            </div>
        );
    }

}

export default AddTodo;
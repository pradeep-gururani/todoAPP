import React from 'react';
var validTodo = "form-control";

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            task:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        validTodo = (event.target.value === '') ? "form-control border border-danger" : "form-control";
        console.log('va',validTodo);
        console.log(event.target.value);
        if(event.target.value ===''){
            
            alert('please enter a todo');
        }
        else{
            var newTask = {"task":`${event.target.value}`,"complete":"no" };            
            this.setState({
                task:newTask
            });
                        
        }
            
    }
    render(){ 
        return (  
            <div className="Todoform">
                <form onSubmit={(e)=>{e.preventDefault();this.props.handleSubmit(this.state.task)}}>
                    {console.log('e',this.props.data)}
                    <h6>Todo</h6>
                    <input type={"text"} id = "input"  placeholder = "your todo.." onChange = {this.handleChange} className={validTodo}/>
                    <input type={"submit"} /*onClick = {(e)=>{e.preventDefault();this.props.updateState(this.state.task)}}*/  className="button" />
                </form>
            </div>
        );
    }

}

export default AddTodo;
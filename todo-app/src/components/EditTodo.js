import React, { Component } from 'react';
class EditTodo extends Component {
    constructor(props){
        super(props);
        this.state = { 
            taskToUpdate :'',
            
         };

    }
   
    render() { 
        return ( 
            <div className = "EditTodo">
                <form >
                    <h6>EditTodo</h6>
                    <input type = "text"  /*onChange = {this.handleEdit} */ className = "form-control"/> 
                    <input type = "submit" value = "update" className = "button"/>               
                </form>
            </div>
         );
    }
}
 
export default EditTodo;
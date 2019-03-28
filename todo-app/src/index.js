import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoAPP from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import EditTodo from './components/EditTodo';

ReactDOM.render(<Router >
    <div>
        <Switch>
        <Route exact path = "/EditTodo/:id" component = {EditTodo}/>
        </Switch>
   
    
 
    <TodoAPP />
    </div>

</Router>, document.getElementById('root'));

serviceWorker.unregister();

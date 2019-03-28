import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoAPP from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(<TodoAPP />, document.getElementById('root'));
serviceWorker.unregister();

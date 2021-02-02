import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// must use hasrouter for github.io to be able to show at least somewhat pages straight from the search bar
const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

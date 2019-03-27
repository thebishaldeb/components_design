import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
  </BrowserRouter>, document.getElementById('root'));


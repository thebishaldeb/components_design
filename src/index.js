import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home';
import MyListings from './MyListings';
import Catalogue from './Catalogue';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my-listings" exact component={MyListings} />
        <Route path="/catalogue" exact component={Catalogue} />
      </Switch>
  </BrowserRouter>, document.getElementById('root'));


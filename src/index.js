import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import MyListings from './MyListings';
import Catalogue from './Catalogue';
import MyListDetails from './MyListDetails';
import ListTourGearOwner from './forms/ListTourGearOwner';
import ListTourGearProduct from './forms/ListTourGearProduct';
import ListTourGearRental from './forms/ListTourGearRental';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my-listings" exact component={MyListings} />
        <Route path="/catalogue" exact component={Catalogue} />
        <Route path="/my-list-details" exact component={MyListDetails} />
        <Route path="/list-your-gear" exact component={ListTourGearOwner} />
        <Route path="/list-your-gear2" exact component={ListTourGearProduct} />
        <Route path="/list-your-gear3" exact component={ListTourGearRental} />
      </Switch>
  </BrowserRouter>, document.getElementById('root'));


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MyListings from "./MyListings";
import Catalogue from "./Catalogue";
import MyListDetails from "./MyListDetails";
import ListTourGearOwner from "./forms/ListTourGearOwner";
import ListTourGearProduct from "./forms/ListTourGearProduct";
import ListTourGearRental from "./forms/ListTourGearRental";
import SignInCard from "./forms/SignInCard";
import CheckoutCart from "./checkoutpages/CheckoutCart";
import CheckoutBill from "./checkoutpages/CheckoutBill";
import CheckoutPay from "./checkoutpages/CheckoutPay";
import CheckoutOrder from "./checkoutpages/CheckoutOrder";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/my-listings" exact component={MyListings} />
      <Route path="/catalogue" exact component={Catalogue} />
      <Route path="/authentication" exact component={SignInCard} />
      <Route path="/my-list-details" exact component={MyListDetails} />
      <Route path="/list-your-gear" exact component={ListTourGearOwner} />
      <Route path="/list-your-gear2" exact component={ListTourGearProduct} />
      <Route path="/list-your-gear3" exact component={ListTourGearRental} />
      <Route path="/checkout-cart" exact component={CheckoutCart} />
      <Route path="/checkout-bill" exact component={CheckoutBill} />
      <Route path="/checkout-pay" exact component={CheckoutPay} />
      <Route path="/checkout-order" exact component={CheckoutOrder} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

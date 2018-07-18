import React, { Component, Fragment } from "react";
import { BrowserRouter as MyNav, Route } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import "w3-css/3/w3.css";
import "font-awesome/css/font-awesome.min.css";
import AddressMapContainer from "./component/Address";
import Home from "./component/Home";
import About from "./component/About";
import ContactForm from "./component/Contact";
import Header from "./component/Header";

const App = props => {
  return (
    <div className="App">
      <MyNav>
        <Fragment>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={ContactForm} />
          <Route
            path="/address"
            exact
            render={() => <AddressMapContainer google={props.google} />}
          />
        </Fragment>
      </MyNav>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCKHMGBM8bgOOZEQnEPqpAvqdlnux13G54"
})(App);

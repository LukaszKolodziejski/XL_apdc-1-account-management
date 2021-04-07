import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Registration from "./containers/Registration/Registration";
// import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "./containers/Checkout/Checkout";
// import Orders from "./containers/Orders/Orders";
// import Auth from "./containers/Auth/Auth";
// import Logout from "./containers/Auth/Logout/Logout";
// import { connect } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Registration} />
        {/* <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} /> */}
      </Layout>
    </Router>
  );
};

export default App;

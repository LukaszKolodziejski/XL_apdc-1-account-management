import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import User from "./containers/User/User";
import Accounts from "./containers/Accounts/Accounts";
// import Logout from "./containers/Auth/Logout/Logout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Auth} />
        <Route path="/user" component={User} />
        <Route path="/accounts" component={Accounts} />
      </Layout>
    </Router>
  );
};

export default App;

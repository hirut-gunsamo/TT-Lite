/*! ***********
 * Here import Router, Switch and route to create route between components
 * "bootstrap": "^4.4.1"  dependency also used for styling components 
 * App.css for css section
 * import Login, signup, dashboard and payment components to create route between them
 ************ */

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./component/Forms/Login";
import SignUp from "./component/Forms/SignUp";
import Dashboard from "./component/Dashboard/dashboard";
import Payment from "./component/Payment";


/*! *************
     * Router section for  the components *
     ************** */
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </div>  
    </Router>
    /*! *************
     * End of Router section *
     ************** */
  );
}

export default App;

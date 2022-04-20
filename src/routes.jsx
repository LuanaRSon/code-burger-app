import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewOrders from "./pages/NewOrders";
import Orders from "./pages/Orders";


function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewOrders} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Router>
  )
}

export default Routes;
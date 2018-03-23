import React from "react";
import {Router, Route, Switch, Redirect} from "dva/router";
import Layout from "./components/Layout";

import Products from "./routes/Products";
import Cart from "./routes/Cart";

const router = ({history}) => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/products" />
      </Switch>
    </Layout>
  </Router>
);

export default router;

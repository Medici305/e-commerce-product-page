import React from "react";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./sass/app.scss";

const App = () => {
  return (
    <Switch>
      <React.Fragment>
        <Container fluid className="page p-0 m-0">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/cancel">
            <Cancel />
          </Route>
        </Container>
      </React.Fragment>
    </Switch>
  );
};

export default App;

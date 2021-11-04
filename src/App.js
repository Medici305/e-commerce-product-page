import React from "react";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./sass/app.scss";

const App = () => {
  return (
    <Switch>
      <Container fluid className="page p-0 m-0">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Container>
    </Switch>
  );
};

export default App;

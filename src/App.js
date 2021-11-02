import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./components/SignIn";
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
        <Route path="/sign-up">
          <Login />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Container>
    </Switch>
  );
};

export default App;

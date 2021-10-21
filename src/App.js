import React from "react";
import NavMenu from "./components/NavMenu";
import { Container, Row, Col } from "react-bootstrap";
import "./sass/app.scss";

const App = () => {
  return (
    <Container className="page">
      {/* 1. Navbar with dropdown menu. */}
      <Row className="nav-bar border-bottom">
        <Col className="d-flex justify-content-center align-items-center">
          <NavMenu />
        </Col>
      </Row>
      {/* 2. Main Content */}
      <Row className="main-content"></Row>
    </Container>
  );
};

export default App;
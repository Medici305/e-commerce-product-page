import React, { useState } from "react";
import NavMenu from "./components/NavMenu";
import Dropdown from "./components/Dropdown";
import Product from "./components/Product";
import { Container, Row, Col } from "react-bootstrap";
import "./sass/app.scss";

const App = () => {
  // State
  const [toggle, setToggle] = useState(false);
  return (
    <Container className="page">
      {/* 1. Navbar */}
      <Row className="nav-bar border-bottom">
        <Col className="d-flex justify-content-center align-items-center">
          <NavMenu toggle={toggle} setToggle={setToggle} />
        </Col>
      </Row>
      {/* 2. Main Content */}
      <Row className="main-content">
        <Product />
      </Row>
      {/* 3. Dropdown menu */}
      {toggle && <Dropdown toggle={toggle} setToggle={setToggle} />}
    </Container>
  );
};

export default App;

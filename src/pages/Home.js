import React, { useState } from "react";
import NavMenu from "../components/NavMenu";
import Dropdown from "../components/Dropdown";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // State
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [basket, setBasket] = useState(false);
  return (
    <Container>
      {/* 3. Navbar */}
      <Row className="nav-bar border-bottom">
        <Col className="d-flex justify-content-center align-items-center">
          <NavMenu
            toggle={toggle}
            setToggle={setToggle}
            counter={counter}
            basket={basket}
          />
        </Col>
      </Row>
      {/* 2. Main Content */}
      <Row className="main-content">
        <Product
          counter={counter}
          setCounter={setCounter}
          basket={basket}
          setBasket={setBasket}
        />
      </Row>
      {/* 3. Dropdown menu */}
      {toggle && <Dropdown toggle={toggle} setToggle={setToggle} />}
    </Container>
  );
};

export default Home;

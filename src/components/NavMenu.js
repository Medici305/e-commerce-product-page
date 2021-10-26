import React, { useState } from "react";
import Cart from "./Cart";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import profile from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({ toggle, setToggle }) => {
  // State
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <Container className="">
      <Row>
        <Col xs={1} md={2} className="d-lg-none d-block">
          <FontAwesomeIcon
            onClick={() => setToggle(!toggle)}
            icon={toggle ? faTimes : faBars}
          />
        </Col>
        <Col className="">
          <img src={logo} fluid alt="logo" />
        </Col>
        <Col className="d-none d-lg-block " sm={8}>
          <Nav className="me-auto">
            <Nav.Link href="#Collections">Collections</Nav.Link>
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col
          xs={4}
          md="auto"
          className="profile  d-flex align-items-center justify-content-around"
        >
          <FontAwesomeIcon
            onClick={() => setCartToggle(!cartToggle)}
            icon={faShoppingCart}
          />
          <img src={profile} alt="avatar" />
        </Col>
        {cartToggle && <Cart />}
      </Row>
    </Container>
  );
};

export default NavMenu;

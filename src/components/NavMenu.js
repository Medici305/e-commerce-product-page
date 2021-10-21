import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import profile from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
  return (
    <Container className="">
      <Row>
        <Col xs={1} md={2} className="d-md-none d-block ">
          <FontAwesomeIcon icon={faBars} />
        </Col>
        <Col className="">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-none d-md-block " md="8">
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
          <FontAwesomeIcon icon={faShoppingCart} />
          <img src={profile} alt="avatar" />
        </Col>
      </Row>
    </Container>
  );
};

export default NavMenu;

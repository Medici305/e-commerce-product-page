import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import logo from "../images/logo.svg";

const Login = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container
      fluid
      className="p-0 d-flex"
      style={{ minHeight: "100vh", Width: "100%" }}
    >
      {/* 1. Left Side sign-in and sign-up  */}
      <Col lg={6} className="" style={{ minHeight: "100%" }}>
        {/* 1.1 Title Company name */}
        <Row className="my-5">
          <Col className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Col>
        </Row>
        {/* 1.2 Form to sign in */}
        <Row className="h-75">
          <SignUp />
        </Row>
      </Col>
      {/* 2. Right Side advert  */}
      <Col
        lg={6}
        className="d-none d-lg-flex sign-up-bg flex-column justify-content-center align-items-center px-5 text-center shadow"
        style={{ minHeight: "100%" }}
      >

      </Col>
    </Container>
  );
};

export default Login;

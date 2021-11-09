import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  // Function
  const [orderNr, setOrderNr] = useState(0);
  useEffect(() => {
    setOrderNr(Math.floor(Math.random() * 10000000000) + 1000000000);
  }, []);
  return (
    <Container className="anim-bg" style={{ height: "100vh" }}>
      <Row className="">
        <Col className="my-5">
          {" "}
          <Link className="ml-lg-5" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
      </Row>
      <Row className="h-75 d-flex align-items-center">
        <Col className="text-center h-50 d-flex flex-column justify-content-evenly align-items-center">
          <FontAwesomeIcon
            className="text-secondary text-white"
            size="4x"
            icon={faCheckCircle}
            spin
            style={{
              animationIterationCount: "2",
              animationDuration: "1s",
            }}
          />
          <div>
            {" "}
            <h1 className="text-white">Thank You for our Order!</h1>
            <p className="text-white">
              Order Number:{" "}
              <span className="font-weight-bold text-black">#{orderNr}</span>
            </p>
          </div>
          <Link to="/">
            <Button
              className="custom-button border bg-white text-black font-weight-bold"
              size="lg"
            >
              Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
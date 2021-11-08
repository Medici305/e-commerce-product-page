import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.svg";
import ShippingInfo from "../components/ShippingInfo";
import Summary from "../components/Summary";

const Checkout = () => {
  return (
    <Container style={{}}>
      <Row className="h-100">
        {/* 1. Title  */}
        <Col
          xs={12}
          className="py-5 d-flex align-items-center"
          style={{}}
        >
          {" "}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
        {/* 2. Shipping information */}
        <Col
          order={1}
          xs={{ span: 12, order: 2 }}
          lg={{ span: 6, order: 1 }}
          className=""
        >
          <ShippingInfo />
        </Col>
        {/* 3. Order summary */}
        <Col
          xs={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 2 }}
          className="h-75"
        >
          <Summary />
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;

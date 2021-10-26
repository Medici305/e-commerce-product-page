import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/app.scss";

const Detail = () => {
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Row className="d-flex justify-content-center">
        <Col md={9}>
          {/* 1. Company name */}
          <h6 className="text-uppercase font-weight-bold">Sneaker Company</h6>
          {/* 2. Sneaker name */}
          <h1 className="font-weight-bold my-md-3">
            Fall Limited Edition Sneakers
          </h1>
          {/* 3. Shoe description */}
          <p className="my-md-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          {/* 4. Price */}
          <Row className="d-flex d-md-block">
            <Col className="d-flex align-items-center">
              <h3 className="font-weight-bold my-0">$125.00</h3>
              <h4 className="font-weight-bold ml-md-4 rounded my-0">50%</h4>
            </Col>
            <Col className="mt-md-2 ">
              <h5 className="font-weight-bold">
                <s>$250.00</s>
              </h5>
            </Col>
          </Row>
          {/* 5. Shoe count and Cart button  */}
          <Row className="mt-5 d-flex justify-content-around">
            <Col
              md={3}
              className="counter d-flex justify-content-between align-items-center rounded py-md-3"
            >
              <FontAwesomeIcon className="" icon={faMinus} />
              <h5 className="my-0 text-black font-weight-bold px-md-4">0</h5>
              <FontAwesomeIcon className="" icon={faPlus} />
            </Col>
            <Col
              md={7}
              className="p-0 rounded d-flex justify-content-center align-items-center"
            >
              <Button className="w-100 py-md-3 shadow">
                <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                Add to cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/app.scss";

const Detail = ({ counter, setCounter }) => {
  // Functions
  const handleAddToCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const handleRemoveFromCounter = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Row className="d-flex justify-content-center">
        <Col xs={12} lg={9}>
          {/* 1. Company name */}
          <h6 className="text-uppercase font-weight-bold">Sneaker Company</h6>
          {/* 2. Sneaker name */}
          <h1 className="font-weight-bold my-md-3">
            Fall Limited Edition Sneakers
          </h1>
          {/* 3. Shoe description */}
          <p className="mt-md-5 mb-md-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          {/* 4. Price */}
          <Row className="d-flex d-md-block">
            <Col className="d-flex align-items-center">
              <h3 className="font-weight-bold my-0">$125.00</h3>
              <h4 className="font-weight-bold ml-4 rounded my-0">50%</h4>
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
              md={4}
              className="counter d-flex justify-content-between align-items-center rounded py-2 mb-3 mb-md-0"
            >
              <Button
                className="btn"
                style={{ background: "none", border: "none" }}
                type="button"
                onClick={() => handleRemoveFromCounter()}
                disabled={counter <= 0 ? true : false}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <h5 className="my-0 text-black font-weight-bold px-lg-4">
                {counter}
              </h5>
              <Button
                className="btn"
                style={{ background: "none", border: "none" }}
                type="button"
                onClick={() => handleAddToCounter()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
            <Col
              md={7}
              className="p-0 rounded d-flex justify-content-center align-items-center"
            >
              <Button className="w-100 py-3 custom-button shadow font-weight-bold">
                <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
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

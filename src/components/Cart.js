import React from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoe from "../images/image-product-1-thumbnail.jpg";

const Cart = () => {
  return (
    <Card
      style={{
        width: "25rem",
        position: "absolute",
        right: "2%",
        top: "100%",
        padding: "1rem 0",
        zIndex: 5,
      }}
      className="shadow rounded-lg"
    >
      <Card.Body>
        <Card.Title>Cart</Card.Title>
        <hr />
        <div className="item d-flex justify-content-between align-items-center my-3">
          <img
            src={shoe}
            style={{ width: "20%" }}
            className="rounded"
            alt="shoe"
          />
          <Card.Text>Shoe name and price from State.</Card.Text>
          <FontAwesomeIcon className="text-secondary" icon={faTrash} />
        </div>
        <Button className="d-block w-100" variant="warning" size="lg">
          checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;

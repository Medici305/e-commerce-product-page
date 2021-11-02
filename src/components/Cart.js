import React from "react";
import { sneaker } from "../data";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoe from "../images/image-product-1-thumbnail.jpg";

const Cart = ({ basket, counter }) => {
  const sumTotal = () => sneaker.sale * counter;
  const handleRemove = () => {};
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
        <Card.Title className="font-weight-bold">Cart</Card.Title>
        <hr />
        <div className="item d-flex justify-content-between align-items-center my-3">
          {basket ? (
            <>
              <img
                src={shoe}
                style={{ width: "20%" }}
                className="rounded"
                alt="shoe"
              />
              <div className="">
                <Card.Text className="">{sneaker.name}</Card.Text>
                <Card.Text className="d-block">
                  ${sneaker.sale}.00 x {basket ? counter : 0}{" "}
                  <span className="font-weight-bold text-black">
                    ${sumTotal()}
                  </span>
                </Card.Text>
              </div>
              <FontAwesomeIcon
                className="text-secondary"
                onClick={handleRemove}
                icon={faTrash}
              />{" "}
            </>
          ) : (
            <>
              <Card.Text className="text-center p-5 font-weight-bold w-100">
                Your cart is empty.
              </Card.Text>
            </>
          )}
        </div>
        {basket && (
          <Button
            className="d-block custom-button w-100 text-white font-weight-bold py-3"
            size="lg"
          >
            Checkout
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;

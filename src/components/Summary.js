import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Summary = () => {
  return (
    <>
      <h2 className="text-uppercase my-3">Order summary</h2>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Summary;

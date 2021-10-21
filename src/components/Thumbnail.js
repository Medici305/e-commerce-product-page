import React from "react";
import { Col } from "react-bootstrap";

const Thumbnail = ({ src, text }) => {
  return (
    <Col className=" d-flex justify-content-center">
      <img
        src={src}
        style={{ width: "75%", objectFit: "cover" }}
        className="img-fluid rounded"
        alt={text}
      />
    </Col>
  );
};

export default Thumbnail;

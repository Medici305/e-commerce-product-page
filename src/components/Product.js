import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import SlideImages from "./SlideImages";
import { smallImg } from "../data";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

const Product = () => {
  // State
  const [centerImg, setCenterImg] = useState();
  return (
    <Container>
      {/* Responsive carousel */}
      <SlideImages />
      <Row className="d-none d-lg-flex my-5">
        {/* Left side with shoe images */}
        <Col xs={12} lg={6} className="border border-dark">
          {/* Center stage main photo */}
          <Row className="d-flex justify-content-center align-items-center mb-4">
            <Col xs={8} className="px-0">
              <img
                src={image1}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="img-fluid rounded"
                alt="Main-sneaker"
              />
            </Col>
          </Row>
          {/* Back up dancers thumbnail */}
          <Row className=" d-flex justify-content-around align-items-center">
            {smallImg.map((img) => (
              <Thumbnail src={img.pic} text={img.desc} />
            ))}
          </Row>
        </Col>
        {/* Right side description of sneaker */}
        <Col xs={12} lg={6} style={{}} className="border bg-success"></Col>
      </Row>
    </Container>
  );
};

export default Product;

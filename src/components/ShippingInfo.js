import React from "react";
import { useHistory } from "react-router-dom";
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";

const ShippingInfo = () => {
  const history = useHistory();
  return (
    <>
      <>
        <h2 className="text-uppercase my-3">Customer Information</h2>
        {/* 1. Email address  */}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className=""
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <h5 className="my-5">Shipping Address</h5>
        {/* 2. First name  */}
        <FloatingLabel
          className="mb-3"
          controlId="floatingInput"
          label="First name"
        >
          <Form.Control type="input" placeholder="First name" />
        </FloatingLabel>
        {/* 3. Last name  */}
        <FloatingLabel
          className="mb-3"
          controlId="floatingInput"
          label="Last name"
        >
          <Form.Control type="input" placeholder="Last name" />
        </FloatingLabel>
        {/* 4. Address  */}
        <FloatingLabel
          className="mb-3"
          controlId="formGridAddress1"
          label="Address"
        >
          <Form.Control placeholder="1234 Main St" />
        </FloatingLabel>
        {/* 5. City / State/ PostCode */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        {/* 6. Phone number  */}
        <FloatingLabel
          className="mb-3"
          controlId="formGridAddress1"
          label="Phone number"
        >
          <Form.Control placeholder="+44" />
        </FloatingLabel>
        {/* 7. Select for marketing advert */}
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I want to receive my order info, get help with my regimen and exclusive offers from Geologie via text message"
          />
          <p className="mt-3">
            I want to receive my order info, get help with my regimen and
            exclusive offers from Geologie via text message I consent to receive
            recurring automated marketing by text message through an automatic
            telephone dialing system. Consent is not a condition to purchase.
            STOP to cancel, HELP for help.Message and Data rates apply. View
            Privacy Policy & ToS.
          </p>
        </Form.Group>
        {/* 8. Go back to cart  */}
        <div
          className=""
          onClick={() => history.goBack()}
          style={{ cursor: "pointer" }}
        >
          <h6>&#8592;Back to cart</h6>
        </div>
      </>
    </>
  );
};

export default ShippingInfo;

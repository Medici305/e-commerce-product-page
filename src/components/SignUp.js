import React from "react";
import { Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Col className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="w-75 mb-4 font-weight-bold">Sign Up</h2>
      <Form className="w-75">
        <div className="d-flex justify-content-between">
          {/* 1. First name */}
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
            style={{ width: "49%" }}
          >
            <Form.Control type="text" placeholder="John" required />
          </FloatingLabel>
          {/* 2. Last name */}
          <FloatingLabel
            controlId="floatingInput"
            label="Last name"
            style={{ width: "49%" }}
          >
            <Form.Control type="text" placeholder="Doe" required />
          </FloatingLabel>
        </div>
        {/* 3. Email Address */}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        {/* 4. Password */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" required />
        </FloatingLabel>
        <h5 className="text-black mb-4">
          Password must be atleast 8 characters long.
        </h5>
        <Button
          className="d-block custom-button w-100 text-white font-weight-bold py-3 mb-3"
          type="submit"
          size="lg"
        >
          Sign Up
        </Button>
        <h5 className="text-black">
          Already a member?{" "}
          <Link to="/sign-in" className="font-weight-bold">
            <u>Sign In</u>
          </Link>
        </h5>
      </Form>
    </Col>
  );
};

export default SignUp;

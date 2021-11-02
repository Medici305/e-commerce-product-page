import React from "react";
import { Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Col
      className="d-flex flex-column justify-content-center align-items-center sign-in-bg"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="w-25 mb-4 font-weight-bold text-white">Sign In</h2>
      <Form className="">
        {/* 1. Email Address */}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        {/* 2. Password */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" required />
        </FloatingLabel>
        <Button
          className="d-block custom-button w-100 text-white font-weight-bold py-3 mb-3"
          type="submit"
          size="lg"
        >
          Sign In
        </Button>
        <h5 className="text-white">
          Not a member?{" "}
          <Link to="/sign-up" className="font-weight-bold">
            <u>Sign Up</u>
          </Link>
        </h5>
      </Form>
    </Col>
  );
};

export default SignUp;

import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  return (
    <Container className="mt-4">
      <Row>
        <Col
          md="7"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className="text-center">Create Account</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name..."
                name="name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFile">
              <Form.Label>File Here</Form.Label>
              <Form.Control type="file" name="file" />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center">
              <Button variant="primary" type="submit">
                Create account
              </Button>
            </div>
            <div className="py-4">
              <p className="text-center">
                Already have an account?
                <Link className="bg__link" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md="5">
          <img
            src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            alt=""
            className="img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;

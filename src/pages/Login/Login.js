import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { auth } from "../../config/firebase";

function Login() {
  const [err, setErr] = React.useState(false);
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const { email, password } = loginForm;

  const handleLogin = async (e) => {
    e.preventDefault();

    // setLoginForm({
    //   ...loginForm,
    //   [e.target.name]: e.target.value,
    // });

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {}
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md="5">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            alt=""
            className="img"
          />
        </Col>
        <Col
          md="7"
          className="d-flex flex-column align-items-center
          justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <h1 className="text-center text-truncate">Welcome Back</h1>
            <p className="text-center">Glad to see you again!</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email..."
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
            <div className="d-flex align-items-center justify-content-center">
              <Button variant="primary" type="submit">
                login
              </Button>
            </div>
            <div className="py-4">
              <p className="text-center">
                Don't have an account?
                <Link className="bg__link" to="/signup">
                  Signup
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

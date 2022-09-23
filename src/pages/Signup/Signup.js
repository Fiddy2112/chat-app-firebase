import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/image/avatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./Signup.css";

function Signup() {
  const [err, setErr] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];
    const displayName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    console.log(file, displayName, email, password);

    try {
      // create user
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // create empty user chats on firestore
            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <Container className="mt-4">
      <Row>
        <Col
          md="7"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSubmit}>
            <h1 className="text-center">Create Account</h1>
            <div className="signup-profile__container">
              <img src={avatar} alt="avatar" className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/img, image/jpg, image/jpeg"
                // onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name..."
                name="displayName"
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

            <div className="d-flex align-items-center justify-content-center">
              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </div>
            {err && (
              <span style={{ textAlign: "center", color: "red" }}>
                {" "}
                Wrong opps!
              </span>
            )}
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

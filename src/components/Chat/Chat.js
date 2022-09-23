import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Input from "../Input/Input";
import Messages from "../Message/Messages";
import "./Chat.css";

function Chat() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Row>
      <Col>
        <div className="messages-output">
          <div className="navbar navbar-left d-flex align-items-center justify-content-between p-2 navbar-right">
            <span>Luke</span>
            <div className="chatIcons">
              <i className="fa fa-video-camera"></i>
              <i className="fa fa-user-plus"></i>
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
          <Messages />
        </div>
      </Col>

      <Form onSubmit={handleSubmit} className="mt-4">
        <Row>
          <Col md={11}>
            <Input />
          </Col>
          <Col md={1}>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}

export default Chat;

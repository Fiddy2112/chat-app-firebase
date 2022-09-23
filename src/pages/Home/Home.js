import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

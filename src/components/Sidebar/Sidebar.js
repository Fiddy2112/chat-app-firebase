import React from "react";
import { Row, Col } from "react-bootstrap";
import UserChat from "./UserChat/UserChat";
import UserInfo from "./UserInfo/UserInfo";
import "./Sidebar.css";
import Search from "./Search/Search";

function Sidebar() {
  return (
    <div className="sidebar__container">
      {" "}
      <Row className="d-flex flex-column align-items-center justify-content-center">
        <Col>
          <UserInfo />
        </Col>
        <Col>
          <Search />
          <UserChat />
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;

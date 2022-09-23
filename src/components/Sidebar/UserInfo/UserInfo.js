import React, { useContext } from "react";
import "./UserInfo.css";
import { Button } from "react-bootstrap";
import avatar from "../../../assets/image/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import "./UserInfo.css";
import { AuthContext } from "../../../context/AuthProvider";

function UserInfo() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar navbar-left d-flex align-items-center justify-content-between px-2 borderRadius">
      <span className="logo">Chat-App</span>
      <div className="user">
        <img
          src={currentUser ? currentUser.photoURL : avatar}
          alt=""
          className="img-user"
        />
        <span className="pe-1">{currentUser.displayName}</span>
        <Button variant="outline-success" onClick={() => signOut(auth)}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;

import React from "react";
import avatar from "../../assets/image/avatar.png";
import avatarFemale from "../../assets/image/avatar-female.png";
import "./Message.css";

function Message() {
  return (
    <div className="message owner">
      <div className="message-info">
        <img src={avatar} alt="avatar-user" />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>Hi</p>
        <img
          src="https://images.unsplash.com/photo-1660227807238-a6591b9c0c11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="img-link"
        />
      </div>
    </div>
  );
}

export default Message;

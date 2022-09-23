import React from "react";
import avatar from "../../../assets/image/avatar-female.png";
import "./UserChat.css";

function UserChat() {
  return (
    <div className="users">
      <div className="user-chat">
        <img src={avatar} alt="avt-userChat" />
        <div className="user-chat__info">
          <span>Luke</span>
          <p>Title</p>
        </div>
      </div>
    </div>
  );
}

export default UserChat;

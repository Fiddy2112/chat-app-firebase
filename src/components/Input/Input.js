import React from "react";
import { Form } from "react-bootstrap";
import "./Input.css";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Enter message..." />
      <div className="send">
        <input id="fileLink" type="file" hidden />
        <label htmlFor="fileLink">
          <i className="fa fa-link" aria-hidden="true"></i>
        </label>
      </div>
    </div>
  );
}

export default Input;

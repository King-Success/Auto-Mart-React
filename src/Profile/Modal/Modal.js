import React from "react";
import "./Modal.css";

function Modal({ onCancel, ...rest }) {
  return (
    <div className="modal show-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onCancel}>
          &times;
        </span>
        <h2>Update advert price</h2>
        <div className="alert smooth">
          <p id="error" className="modal-error" />
          <p id="success" />
        </div>
        <div id="inputs">
          <input type="text" id="update-price" placeholder=" e.g 120000" />
          <button className="btn" id="submit-btn">
            {" "}
            update{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

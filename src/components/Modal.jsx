// Modal.js
import React, { useState, useEffect } from "react";
import { data } from "../assets/data";
import "./modal.css";

function Modal({ onClose, buttonIndex }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter(
      (item) => item.buttonIndex === buttonIndex + 1
    );
    setItems(filteredItems);
  }, [buttonIndex]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Drawer {buttonIndex + 1}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

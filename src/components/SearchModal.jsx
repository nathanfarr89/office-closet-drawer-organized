// Modal.js
import React, { useState, useEffect } from "react";
import { data } from "../assets/data";
import "./modal.css";

function SearchModal({ onClose, searchQuery, setSearchQuery }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>List of All Items</h2>
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.buttonIndex}: {item.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SearchModal;

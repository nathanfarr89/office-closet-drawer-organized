// App.js
import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal"; // Import the Modal component
import SearchModal from "./components/SearchModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedButton, setSelectedButton] = useState(null); // State to store which button was clicked
  const [matchingButtons, setMatchingButtons] = useState([]); // State to store matching button indices
  const [searchModalOpen, setSearchModalOpen] = useState(false); // State to manage modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

  const handleListAllItems = () => {
    setSearchModalOpen(true);
  };
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Office Closet Drawers</h1>
      <div>
        <button className="search-button" onClick={handleListAllItems}>
          List All Items
        </button>
        {searchModalOpen && (
          <SearchModal
            onClose={() => setSearchModalOpen(false)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
      </div>
      <div className="grid-container">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className={`grid-item grid-item-${index + 1} ${
              matchingButtons.includes(index + 1) ? "matched" : ""
            }`}
          >
            <button className="button" onClick={() => handleButtonClick(index)}>
              {index + 1}
            </button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          buttonIndex={selectedButton}
        />
      )}
    </div>
  );
}

export default App;

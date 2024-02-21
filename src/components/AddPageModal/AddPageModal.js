import React, { useState } from "react";
import "./AddPageModal.css";

const AddPageModal = ({ onClose, onSubmit }) => {
  const [pageName, setPageName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pageName);
    setPageName("");
    onClose();
  };
  return (
    <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span> 
      <div className="modal-content">
        
        <p className="addpage-heading">Add a new page</p>
        <form onSubmit={handleSubmit}>
          <label>
            Page Name:
            <input
              type="text"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddPageModal;

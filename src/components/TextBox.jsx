import React from "react";

function TextBox({ label, handleData, id, selectedValue }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        value={selectedValue}
        id={id}
      />
    </div>
  );
}

export default TextBox;
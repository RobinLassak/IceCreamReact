import React from "react";

function TextBox({ label, handleData, id, selectedValue }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };
  return (
    <>
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
    </>
  );
}

export default TextBox;
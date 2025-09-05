import React from "react";

function Range({ min, max, label, handleData, dataIn,id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        onChange={handleChange}
        id={id}
        value={dataIn}
        style={{ maxWidth: '80%' }}
      />
    </div>
  );
}

export default Range;

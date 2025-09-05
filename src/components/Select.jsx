import React from "react";

function Select({ dataIn, label, handleData, selectedValue, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-select"
        id={id}
        onChange={handleChange}
        value={selectedValue}
        style={{ maxWidth: '80%' }}
      >
        {dataIn.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

import React from "react";

function NumImp({ dataIn, label, handleData, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
        style={{ maxWidth: '80%' }}
      />
    </div>
  );
}

export default NumImp;

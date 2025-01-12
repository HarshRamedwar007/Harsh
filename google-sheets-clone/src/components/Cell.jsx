// src/components/Cell.jsx
import React from "react";

const Cell = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="cell"
    />
  );
};

export default Cell;
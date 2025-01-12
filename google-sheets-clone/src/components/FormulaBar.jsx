// src/components/FormulaBar.jsx
import React, { useState } from "react";

const FormulaBar = ({ onFormulaSubmit }) => {
  const [formula, setFormula] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormulaSubmit(formula);
    setFormula("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula"
      />
      <button type="submit">Apply</button>
    </form>
  );
};

export default FormulaBar;
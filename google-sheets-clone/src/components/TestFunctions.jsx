import React from "react";

const TestFunctions = ({ data }) => {
  const handleTest = () => {
    const result = evaluateFormula("=SUM(A1:A3)", data);
    alert(`SUM Result: ${result}`);
  };

  return <button onClick={handleTest}>Test SUM Function</button>;
};

export default TestFunctions;
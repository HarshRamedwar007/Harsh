// src/components/Spreadsheet.jsx
import React, { useState } from "react";
import Cell from "./Cell";

const Spreadsheet = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [data, setData] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );

  const handleCellChange = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <div className="spreadsheet">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Spreadsheet;
import React from "react";
import Toolbar from "./components/Toolbar";
import FormulaBar from "./components/FormulaBar";
import Spreadsheet from "./components/Spreadsheet";
import TestFunctions from "./components/TestFunctions";

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <FormulaBar />
      <Spreadsheet />
      <TestFunctions />
    </div>
  );
};
  
export default App;
import React, { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <>
      <h1>Weather Forecast</h1>
      <Select />
      <DisplayData city="Tel Aviv" />
    </>
  );
}

export default App;

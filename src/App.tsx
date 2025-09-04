import React, { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import DisplayData from "./components/DisplayData";
import CounterButton from "./components/CounterButton";

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Weather Forecast</h1>
        <Select />
        {/* <DisplayData city="Tel Aviv" /> */}
        <CounterButton />
      </div>
    </>
  );
}

export default App;

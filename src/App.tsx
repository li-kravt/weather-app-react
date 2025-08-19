import React, { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import DisplayData from "./components/DisplayData";
import CounterButton from "./components/CounterButton";

function App() {
  return (
    <>
      <h1>Weather Forecast</h1>
      <Select />
      {/* <DisplayData city="Tel Aviv" /> */}
      <CounterButton />
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import DisplayData from "./components/DisplayData";
import CounterButton from "./components/CounterButton";
import Header from "./components/Header";
import DataFetch from "./components/DataWeather";
import InputSearchCity from "./components/InputSearchCity";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-blue-50 h-full">
        <Header />
        <h1>Weather Forecast</h1>
        <Select />
        {/* <DisplayData city="Tel Aviv" /> */}
        <CounterButton />
        <DataFetch className="flex items-center" />
      </div>
      <InputSearchCity />
    </>
  );
}

export default App;

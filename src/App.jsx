import React, { useState } from "react";
import "./App.css";
import Select from "./components/Select";
import DisplayData from "./components/DisplayData";
import CounterButton from "./components/CounterButton";
import Header from "./components/Header";
import DataFetch from "./components/DataWeather";
import InputSearchCity from "./components/InputSearchCity";
import CounterButtonPlusMinus from "./components/tasks/UseStateNumbers1";
import Checkbox from "./components/tasks/UseStateCheckbox";
import PracticeJS from "./components/tasks/ForOf";
import ColoredText from "./components/tasks/ColoredText";
import Map from "./components/tasks/Map";
import Filter from "./components/tasks/Filter";
import Reduce from "./components/tasks/Reduce";
import Greeting from "./components/tasks/Props";
// import UseStateListButtonAddElement from "./components/tasks/UseStsteListButtonAddElement";


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
      <div className="flex flex-col border-4 border-blue-700">
        <p className="text-3xl text-blue-700 font-bold">Practice Area</p>
        <InputSearchCity />
        {/* <UseStateListButtonAddElement /> */}
        <CounterButtonPlusMinus />
        <Checkbox />
        <PracticeJS />
        <ColoredText color="blue" text="React is cool" />
        <Map />
        <Filter />
        <Reduce />
        <Greeting name="Anna" age="25" />
        <Greeting name="Elina" age="23" />
        <Greeting name="Biba" age="35" />
      </div>
    </>
  );
}

export default App;

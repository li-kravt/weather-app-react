import { useState } from 'react'
import './App.css'

const CITIES = [
  {
    city: "Munich",
    lstitude: 48.1374,
    longitude: 11.5755,
  },
  {
    city: "Tel-Aviv",
    latitude: 32.0809,
    longitude: 34.7806,
  }
]


function App () {

  return (
    <>
      <h1>Weather Forecast</h1>
      <Select />
    </>
  );
}

export default App

function Select () {

  const optionsCities = CITIES.map(({city}, i) => 
    <option key={i}>
      {city}
    </option>
  );

  return (
    <select>
      {optionsCities}
    </select>
  )
}
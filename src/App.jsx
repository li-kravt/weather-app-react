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
    <div>
      <h1>Weather Forecast</h1>
      <Select />
    </div>
  );
}

export default App

function Select (props) {
  const munich = props.CITIES[0].city

  return (
    <select>
        <option>
          {munich}
        </option>
    </select>
  )
}


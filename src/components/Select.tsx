import React, { useState } from "react";
import CITIES from "../consts/CITIES";

export default function Select() {
  const optionsCities = CITIES.map((city) => (
    <option key={city.id} value={city.city}>
      {city.city}
    </option>
  ));

  const [selectedCity, setSelectedCity] = useState(CITIES[0].city);

  function handleChange(e) {
    setSelectedCity(e.target.value);
  }

  return (
    <div className="weather-display-container">
      <label>Choose city</label>
      <select
        id="selectCity"
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
        value={selectedCity}
      >
        {CITIES.length === 0 ? <option>No cities found</option> : optionsCities}
      </select>
      <p>You choose {selectedCity}</p>
    </div>
  );
}

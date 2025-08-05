import React from "react";

function Select() {
  const CITIES = [
    {
      city: "Munich",
      lstitude: 48.1374,
      longitude: 11.5755,
      id: 1,
    },
    {
      city: "Tel-Aviv",
      latitude: 32.0809,
      longitude: 34.7806,
      id: 2,
    },
  ];

  const optionsCities = CITIES.map((city) => (
    <option key={city.id} value={city.id}>
      {city.city}
    </option>
  ));

  return (
    <>
      <label>Choose city</label>
      <select className="form-select" aria-label="Default select example">
        {optionsCities}
      </select>
    </>
  );
}

export default Select;

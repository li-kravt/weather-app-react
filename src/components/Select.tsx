import React from "react";
import CITIES from "../consts/CITIES";

function Select() {
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

import React from "react";
import CITIES from "../consts/CITIES";

function Select() {
  const optionsCities = CITIES.map((city) => (
    <option
      key={city.id}
      value={city.id}
      onClick={() => console.log("clicked")}
    >
      {city.city}
    </option>
  ));

  return (
    <>
      <label>Choose city</label>
      <select
        id="selectCity"
        className="form-select"
        aria-label="Default select example"
      >
        {CITIES.length === 0 ? <option>No cities found</option> : optionsCities}
      </select>
    </>
  );
}

export default Select;

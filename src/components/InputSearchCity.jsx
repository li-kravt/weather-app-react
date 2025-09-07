import React, {useState} from "react";

export default function InputSearchCity() {
  const [city, setCity] = useState("");


  return (
    <>
    <input type="placeholder" className="border border-2" onChange={(e) => setCity(e.target.value)}></input>
    <p className="border h-8 w-40">City: {city}</p>
    </>
  )
}
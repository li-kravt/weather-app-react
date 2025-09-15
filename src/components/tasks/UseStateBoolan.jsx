import React, { useState } from "react";

export default function UseStateBoolean() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="flex flex-col border-2">
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      <p>Light is {isOn === true ? "ON" : "OFF"}</p>
    </div>
  )

}
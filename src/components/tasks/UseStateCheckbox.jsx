import React, { useState } from "react";

export default function Checkbox() {
  const [text, setText] = useState("off")
  function handleClick(e) {
    if (e.target.checked === true) {
      setText("on")
    }
    else {
      setText("off")
    }
  }

  return (
    <div className="flex flex-col items-start p-4 border border-2">
      <p className="font-bold">Checkbox Darkmode</p>
      <label>Dark mode</label>
      <input type="checkbox" onChange={handleClick}></input>
      <p>Dark mode is {text}</p>
    </div>
  )

}

// Task: Toggle dark mode with a checkbox

// Requirements:

// Add a checkbox with label “Dark mode”.

// When checked → show text “Dark mode is ON”.

// When unchecked → show text “Dark mode is OFF”.

// That’s it.

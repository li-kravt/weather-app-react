import React, { useState } from "react";

export default function Checkbox() {
  const [isDark, setIsDark] = useState(false)
  function handleClick(e) {
    setIsDark(e.target.checked)
  }

  return (
    <div className="flex flex-col items-start p-4 border border-2">
      <p className="font-bold">Checkbox Darkmode</p>
      <label>Dark mode</label>
      <input type="checkbox" onChange={handleClick}></input>
      <p>Dark mode is {isDark ? "on" : "off"}</p>
    </div>
  )

}

// Task: Toggle dark mode with a checkbox

// Requirements:

// Add a checkbox with label “Dark mode”.

// When checked → show text “Dark mode is ON”.

// When unchecked → show text “Dark mode is OFF”.

// That’s it.

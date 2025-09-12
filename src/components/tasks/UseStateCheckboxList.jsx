import React, { useState } from "react";


export default function CheckboxList() {
  const [checked, setChecked] = useState(false, 0)

  function handleClick(e) {
    setChecked(e.target.checked, e.target.label)
  }

  return (
    <div>
      <div>
        <input type="checkbox" checked={checked} id="1" onChange={handleClick}></input>
        <label htmlFor="1" style={checked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>Learn React</label>
      </div>
      <div>
        <input type="checkbox" checked={checked} id="2" onChange={handleClick}></input>
        <label htmlFor="2" style={checked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>Practice JS</label>
      </div>
      <div>
        <input type="checkbox" checked={checked} id="3" onChange={handleClick}></input>
        <label htmlFor="3" style={checked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>Walk dog</label>
      </div>
    </div>
  )
}

// Task: Todo list with checkboxes

// Start with an array of tasks (strings), e.g. ["Learn React", "Practice JS", "Walk dog"].

// Show each task in a list with a checkbox.

// When a checkbox is checked → that task text should appear with a line-through (text-decoration: line-through).

// When unchecked → normal text.

// Example behavior:

// Initially:

// [ ] Learn React
// [ ] Practice JS
// [ ] Walk dog


// User checks "Practice JS":

// [ ] Learn React
// [x] Practice JS   (line-through)
// [ ] Walk dog


// 👉 This will force you to use:

// useState for an array of objects (each task with text and done).

// map to render the list.

// onChange to update the correct task.
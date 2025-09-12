import React, { useState } from "react";


export default function CheckboxList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Practice JS", done: false },
    { id: 3, text: "Walk dog", done: false }
  ]);


  function handleClick(taskId) {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task
    ))
  }

  return (
    <div>
      {tasks.map((task) => <div>
        <input type="checkbox" key={task.id} checked={task.done} onChange={() => handleClick(task.id)}></input>
        <label htmlFor={task.id} style={task.done ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{task.text}</label>
      </div>)}
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
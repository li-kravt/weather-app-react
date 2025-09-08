import React, {useState} from "react";

export default function UseStateListButtonAddElement() {
  const [li, setLi] = useState(["add something"])

  return (
  <>"
  <input  type="text" className="border border-4" placeholder="add task"/>
  <button onClick={setLi()}>Add</button>
  <ul>
    {[...li]}
  </ul>
  </>
  )
}

// Here’s the task:

// An input field for text.

// A button “Add”.

// Below it, a list (<ul>) that shows all the texts you added.

// After clicking “Add”, the input should clear.

// Example behavior:

// Type “Hello” → click Add → list shows: Hello

// Type “World” → click Add → list shows:

// Hello
// World


// You’ll need:

// useState for storing an array of strings.

// On button click, update the array with the new text.

// Want me to show you a code example, or do you want to try first?
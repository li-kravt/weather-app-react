import React, { useState } from "react";

export default function CounterButtonPlusMinus() {
  // const [num, setNum] = useState(0)

  const [array, setArray] = useState([])
  const [valueInput, setValueInput] = useState("")

  const sum = array.reduce(((acc, num) => acc + num), 0)

  function handleClick() {
    console.log(valueInput)
    setArray([...array, Number(valueInput)])
    console.log(array)
    setValueInput("")
  }




  return (
    // Task 1
    <div className="flex flex-col items-start p-4 w-auto border-2 gap-8">
      {/* <div className="flex flex-col items-start p-4 w-auto border-2">
        <p className="font-bold">CounterButtonPlusMinus</p>
        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div> */}

      {/* Task 2 */}
      <div className="flex flex-col items-start p-4 w-auto border-2">
        <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} placeholder="Enter your number"></input>
        <button className="p-2 bg-blue-200" onClick={handleClick}>Add</button>
        <ul className="flex flex-col h-30">
          {array.map((num, index) => <li key={index}>{num}</li>)}
        </ul>
        <p>{sum} sum all of numbers</p>
        <p>you entered: {valueInput}</p>
        <p>{array.length === 0 ? "" : Math.round(sum / array.length)}: the average of all numbers</p>
      </div>
    </div>
  )
}

// 🔢 Task: Counter with History and Average

// Build a component where:

// There’s a number input where the user can type a number.

// A button “Add” saves that number into state (an array of numbers).

// Below, show:

// The list of all numbers entered so far.

// The sum of all numbers.

// The average of all numbers.

// Add a button “Reset” that clears everything.

// ⚡ Hints:

// Use useState for the array of numbers.

// Use map to render the list of numbers.

// Use reduce to calculate sum and average.

// Be careful: if array is empty, average should be 0.
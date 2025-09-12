import React, { useState } from "react";

export default function Map() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row border-2 gap-4">
      {numbers.map((num, id) =>
        <p key={id}>Number: {num * 3}</p>
      )}
    </div>
  )

}

// Task:

// Use .map() to create a new array where each number is doubled.
// → [2, 4, 6, 8, 10]

// Use .map() to turn this array into strings like "Number: 1", "Number: 2", …
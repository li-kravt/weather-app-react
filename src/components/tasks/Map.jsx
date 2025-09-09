import React, { useState } from "react";

export default function Map() {
  const numbers = [1, 2, 3, 4, 5];

  console.log(numbers.map((x) => x * 3))

}

// Task:

// Use .map() to create a new array where each number is doubled.
// → [2, 4, 6, 8, 10]

// Use .map() to turn this array into strings like "Number: 1", "Number: 2", …
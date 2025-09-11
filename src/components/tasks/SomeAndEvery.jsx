import React, { useState } from "react";

export default function SomeAndEvery() {
  // 1. Task with some:
  // Check if an array of numbers contains at least one negative number.

  let numbers = [3, 7, -2, 10];
  console.log("numbers: ", numbers.some((e) => e < 0));

  // Check if all numbers in the array are greater than 0.
  let numbs = [3, 7, -2, 10];
  console.log("numbs: ", numbs.every((e) => e > 0))
}


import React, { useState } from "react";

export default function Reduce() {
  let numbers = [5, 10, 15, 20];

  const sum = numbers.reduce((acc, curValue) => { return acc + curValue }, -3)

  console.log(sum)
}
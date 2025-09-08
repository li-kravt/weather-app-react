import React, { useState } from "react";

export default function PracticeJS() {
  let numbers = [1, 2, 3, 4, 5, 6];

  for (let item of numbers) {
    if (item % 2 === 0)
      console.log(item)
  }

  let user = { name: "Anna", age: 25, city: "Munich" };

  for (let key in user) {
    console.log(key, ":", user[key])
  }

  let day = 3
  switch (day) {
    case 1:
      console.log("mon")
      break
    case 2:
      console.log("tue")
      break
    case 3:
      console.log("wed")
      break
    case 4:
      console.log("thu")
      break
    default:
      console.log("unknown day")
  }

}
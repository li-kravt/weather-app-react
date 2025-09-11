import React, { useState } from "react";

export default function SpreadAndRest() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5];

  let arr3 = [...arr1, ...arr2]

  console.log(arr3)

  function summAll(...numbers) {
    return numbers.reduce((acc, e) => acc + e, 0)
  }

  console.log("REST: ", summAll(1, 3, 10))

}
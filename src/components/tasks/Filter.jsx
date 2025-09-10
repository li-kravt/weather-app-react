import React, { useState } from "react";

export default function Filter() {
  let words = ["hi", "sun", "apple", "cat", "javascript"];

  console.log(words.filter((e) => e.length > 3))
}

// expected result: ["apple", "javascript"]
import React, { useState } from "react";

export default function Greeting({ name, age }) {

  return (
    <>
      <p>Hello, {name}, are you {age}?</p>
      <button>Yes!</button>
    </>
  )
}
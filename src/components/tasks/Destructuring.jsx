import React, { useState } from "react";

export default function Destructuring() {

  //   Use destructuring to extract firstName and city into variables and log them.

  let person = { firstName: "John", lastName: "Doe", city: "Berlin" };

  let { firstName, lastName } = person

  console.log(firstName, lastName)
}
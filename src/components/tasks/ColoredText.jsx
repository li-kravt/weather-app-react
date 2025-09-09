import React, { useState } from "react";

export default function ColoredText({ color, text }) {

  return (
    <p style={{ color }}>{text}</p>
  )
}
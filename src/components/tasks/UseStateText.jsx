import React, { useState } from "react";

export default function UseStateText() {
  const [text, setText] = useState("")
  const [characters, setCharacters] = useState(0)
  const [words, setWords] = useState(0)

  function handleClick(e) {
    let value = e.target.value
    setText(value)
    setCharacters(value.length)
    setWords(value.trim().split(/\s+/).length)
    if (value == "") {
      setCharacters(0)
      setWords(0)
    }
  }


  return (
    <div className="flex flex-col border-2">
      <textarea className="border-2 border-amber-600" onChange={handleClick} />
      <div>
        <p>Characters: {characters}</p>
        <p className={words >= 5 ? "bg-red-500" : ""}>Words: {words}</p>
        <p>{text}</p>
      </div>
    </div>

  )
}
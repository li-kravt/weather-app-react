import React, { use, useState } from "react";

export default function Greeting({ userName, age }) {
  const [text, setText] = useState(`Hello, ${userName}, are you ${age}?`)


  function handleClick() {
    setText(`Nice too meet you, ${userName}!`)
  }

  return (
    <>
      <p>{text}</p>
      <button onClick={handleClick} >Yes</button>
    </>
  )
}

// Окей, усложняем и добавляем пропсы:

// Task:

// Создай компонент Greeting:

// Он принимает через пропсы:

// name (строка)

// age (число)

// greetingText (строка, например "Welcome" или "Hi")

// По умолчанию показывает:

// {greetingText}, {name}, are you {age}?
// [Yes!]


// Когда нажимаешь на кнопку Yes! → текст меняется на:

// Nice to meet you, {name}!


// 👉 Здесь ты совместишь:

// props (чтобы сделать компонент универсальным),

// useState (чтобы менять текст после клика).

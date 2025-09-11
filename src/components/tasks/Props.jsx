import React, { useState } from "react";

export default function Greeting({ name, age, greetingText }) {

  try {
    const [userName, setUserName] = useState(name)

    return (
      <>
        <p>{greetingText}, {userName}, are you {age}?</p>
        <button onClick={setUserName(name)}>Yes!</button>
      </>
    )
  } catch {
    console.error("something goes wrong");

  }
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

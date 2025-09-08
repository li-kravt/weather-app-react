import React, {useState} from "react";

export default function CounterButtonPlusMinus() {
  const [num, setNum] = useState(0)

  return (
    <div className="flex flex-col w-auto border-2">
      <p className="font-bold">CounterButtonPlusMinus</p>
    <p>{num}</p>
    <button onClick={() => setNum(num + 1)}>+</button>
    <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  )
}
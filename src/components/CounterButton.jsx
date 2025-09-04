import React, {useState} from "react";

export default function CounterButton () {
  const [count, setCount] = useState(1)

  function handleClick() {
    setCount(count * 2)
  }
  
  return <button type="button" class="btn btn-light" onClick={handleClick}>{count}</button>
}

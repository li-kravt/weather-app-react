import React, {useState} from "react";

function CounterButton () {
  const [count, setCount] = useState(1)
  
  return <button type="button" class="btn btn-light" onClick={()=> setCount(count * 2)}>{count}</button>
}

export default CounterButton
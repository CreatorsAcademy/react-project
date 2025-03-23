import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      <h2>Counter Example</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
      {/* <div>You clicked x times</div> */}
    </div>
  );
}

export default Counter;

import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  //increment
  const increment = () => {
    setCount(count + 1);
  };

  //decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

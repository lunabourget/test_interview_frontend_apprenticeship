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
    <div className="counter-container">
      <h2>Count : {count}</h2>
      <button className="decrement" onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

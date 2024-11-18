// 4.  What is useCallback() hook? Study more details with example?

// Ans : useCallback is a hook that can be used to memoise the result of a function, the callback inside this hook will execute only if its dependeny changes.
// 	  this helps us to improve the performance, we can skipp the calling of the function for each re-render.

import React, { useState, useCallback } from "react";

const CallBack: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <label>Assignment 4</label>
      <h1>Count: {count}</h1>
      <Child onClick={handleClick} />
    </div>
  );
};

const Child: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click here</button>;
};

export default CallBack;

import React from "react";
import { useState } from "react";

function UseStateHook() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Counter value is: ", counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Counter value is: ", counter);
  };

  return (
    <div>
      <h1>Counter value: {counter}</h1>
      <h2>This is counter: {counter}</h2>
      <h3>Hello this is {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default UseStateHook;

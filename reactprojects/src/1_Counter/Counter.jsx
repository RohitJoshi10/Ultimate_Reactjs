import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  const Increment = () => {
    // counter = counter + 1;
    // counter++;
    // return counter >= 20 ? 0 : setCounter(counter);
    // if (counter >= 20) {
    //   return;
    // } else {
    //   setCounter(counter);
    // }

    return counter >= 20 ? 0 : setCounter((prevCounter) => prevCounter + 1);
  };

  const Decrement = () => {
    // counter = counter - 1;
    // counter--;
    // return counter < 0 ? 0 : setCounter(counter);
    // if (counter < 0) {
    //   return;
    // } else {
    //   setCounter(counter);
    // }

    return counter <= 0 ? 0 : setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      <button onClick={Increment}>+</button>
      <span>Value: {counter}</span>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default Counter;

// Problem:- Make a counter app which will count value from 0 to 20.
// In React, when you use the useState hook to manage state, you should always update the state using the setter function (setCounter in this case) rather than directly modifying the state variable (counter).
// When you use counter++, it directly modifies the counter variable without updating the React state, which can lead to unexpected behavior due to the asynchronous nature of state updates in React.

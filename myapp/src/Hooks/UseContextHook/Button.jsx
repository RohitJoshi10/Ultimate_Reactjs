import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from "../../context/context";

function Button() {
  const value = useContext(counterContext);
  return (
    <>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        I am a button
      </button>
    </>
  );
}

export default Button;

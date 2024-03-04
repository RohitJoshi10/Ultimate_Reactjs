import React from "react";
import { useState, useRef } from "react";

function UseRefHook() {
  const refElement = useRef("");
  const [name, setName] = useState("Rohit");
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "Green";
    refElement.current.value = "Rohit Joshi";
  }
  return (
    <>
      <h1>Learning useRef Hook</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handleInput</button>
    </>
  );
}

export default UseRefHook;

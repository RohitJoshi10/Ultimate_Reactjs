import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Radha");

  useEffect(() => {
    console.log("Component Mounted");
  }, [data]);

  function updateCount() {
    setCount(count + 1);
  }

  function updateData() {
    setData("Krishna");
  }

  return (
    <>
      <h1>Button Clicked {count} times</h1>
      <h1>Bolo Bolo Birajwasi... {data} bolo</h1>
      <button onClick={updateCount}>Click</button>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default UseEffectHook;

import React, { useCallback, useState } from "react";
import Child from "./Child";

function UseCallbackHook() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const counting = useCallback(() => {
    // Some operation will be performed here.
  }, [count]);
  return (
    <>
      <h1>UseCallback aya hai Bhaago😂</h1>
      <Child counting={counting} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

export default UseCallbackHook;

import React from "react";
import { useContext } from "react";
import { counterContext } from "../../context/context";

function Component1() {
  const value = useContext(counterContext);
  return (
    <>
      {value.count} <br />
    </>
  );
}

export default Component1;

// function Component1() {
//   const counter = useContext(counterContext);
//   return (
//     <>
//       {counter} <br />
//     </>
//   );
// }

// export default Component1;

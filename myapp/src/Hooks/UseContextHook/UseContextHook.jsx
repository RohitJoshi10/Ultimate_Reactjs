import React, { useState } from "react";
import Navbar from "./Navbar";
import { counterContext } from "../../context/context";

function UseContextHook() {
  let [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
        <br />
        <button onClick={() => setCount((count = count + 1))}>
          Counter {count}
        </button>
      </counterContext.Provider>
    </>
  );
}

export default UseContextHook;

// Optimized way to perform props drilling.
// UseContextHook.jsx
//       Navbar.jsx
//           Button.jsx
//               Component1.jsx

// Here i have a count in my useConextHook.jsx file and i migrated it to every component so that i can use it my component1.jsx file
// This way of passing thing is called as props drilling

// This same thing we can achieve through context API
// I will create a context in my context.js file
// Then i will use this context in my UseContextHook file.
// I will wrap my whole UseContextHook file in counterContext.Provider
// In this way muje mera context mil jayega <counterContext.Provider> k ander and uske bhi ander jitne bhi components and unme
// value={count} sabi components ko mil jayegi Navbar mai bhi and Navebar k ander jitne bhi neseted components and and une bhi ander jitne nested components hai sbko mil jayegi value count ki
// Now i can use this valu in my Component1 file
// import { useContext } from "react"; to use it

// function UseContextHook() {
//   let [count, setCount] = useState(0);
//   return (
//     <>
//       <counterContext.Provider value={count}>
//         <Navbar />
//         <br />
//         <button onClick={() => setCount((count = count + 1))}>
//           Counter {count}
//         </button>
//       </counterContext.Provider>
//     </>
//   );
// }

// Now ye jo value hai ye ab ek obj hai value={{ count, setCount }}

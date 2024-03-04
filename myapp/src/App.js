import React from "react";
import styles from "./index.css";
import UseStateHook from "./Hooks/UseStateHook/UseStateHook";
import Props from "./Props/Props";
import UseEffectHook from "./Hooks/UseEffectHook/UseEffectHook";
import UseRefHook from "./Hooks/UseRefHook/UseRefHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </div>
  );
}

export default App;

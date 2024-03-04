import React from "react";
import styles from "./index.css";
import UseStateHook from "./Hooks/UseStateHook/UseStateHook";
import Props from "./Props/Props";
import UseEffectHook from "./Hooks/UseEffectHook/UseEffectHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      <UseEffectHook />
    </div>
  );
}

export default App;

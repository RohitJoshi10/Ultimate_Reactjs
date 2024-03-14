import React from "react";
import styles from "./index.css";
import UseStateHook from "./Hooks/UseStateHook/UseStateHook";
import Props from "./Props/Props";
import UseEffectHook from "./Hooks/UseEffectHook/UseEffectHook";
import UseRefHook from "./Hooks/UseRefHook/UseRefHook";
import UseContextHook from "./Hooks/UseContextHook/UseContextHook";
import Parent from "./PropsDrilling/Parent";
import UseMemoHook from "./Hooks/UseMemoHook/UseMemoHook";
import UseCallbackHook from "./Hooks/UseCallbackHook/UseCallbackHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseContextHook /> */}
      {/* <Parent /> */}
      {/* <UseMemoHook /> */}
      <UseCallbackHook />
    </div>
  );
}

export default App;

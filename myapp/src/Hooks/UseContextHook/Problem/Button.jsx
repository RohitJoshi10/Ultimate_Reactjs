import React from "react";
import Component1 from "./Component1";

function Button({ count }) {
  return (
    <>
      <button>
        <span>
          <Component1 count={count} />
        </span>
        I am a button
      </button>
    </>
  );
}

export default Button;

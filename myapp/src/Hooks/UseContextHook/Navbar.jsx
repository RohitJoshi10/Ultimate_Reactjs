import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div>Navbar</div>
      <Button />
    </>
  );
}

export default Navbar;

// Either i could do (props) and then count={props.count}
// or i can destructure it here only
// We have taken out count from my props object.

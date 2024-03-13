import React from "react";
import ChildC from "./ChildC";

function ChildB({ name }) {
  return (
    <>
      <ChildC name={name} />
    </>
  );
}

export default ChildB;

import React from "react";
import ChildA from "./ChildA";

function Parent() {
  const name = "Rohit Joshi";
  return (
    <>
      <ChildA name={name} />
    </>
  );
}

export default Parent;

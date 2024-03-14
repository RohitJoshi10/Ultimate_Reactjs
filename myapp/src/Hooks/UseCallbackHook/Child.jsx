import { React, memo } from "react";

function Child({ counting, count }) {
  console.log("child Component called");
  return <></>;
}

export default memo(Child);

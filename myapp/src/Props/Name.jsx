import React from "react";

function Name(Props) {
  return (
    <div className="bg-yellow-400 p-4 text-center text-xl">
      Hello myself {Props.name} i am {Props.Age} young.
    </div>
  );
}

export default Name;

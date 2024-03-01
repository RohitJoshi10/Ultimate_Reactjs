import React from "react";
import Card from "./Card";
import Name from "./Name";

function Props() {
  let age = 23;
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">This is card</h1>
      <Card username="Rohit Joshi" btnText="click me" />
      <Card username="Rohit" />
      <Name name="Rohit" Age={age} />
    </>
  );
}

export default Props;

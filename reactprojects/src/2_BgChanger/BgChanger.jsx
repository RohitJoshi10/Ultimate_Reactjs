import React from "react";
import "tailwindcss/tailwind.css";
import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;

// onClick={setcolor} is wrong why ?
// onClick ko ek function chahye na ki uski return value
// onClick={setcolor} ese mai bhi kaam ho jayega but iss tareke se mai arguments nhi bhej skta.
// And agr muje arguments bhjene hai toh isko ese likhna padega
// onClick={setcolor()}
// Ab problem ye hai ki ye jo dega onclick ko wo ek return value dega but onclick ko toh ek function chaheye na ki return value.
// toh hume ese dene padenge fir colors koi options he nhi hai. onClick={setcolor("red")}.
// Toh hume bola ki ye sab hatao onClick ko ek callback de do. Like this onClick={ () => {}}
// onClick={() => {}} Now we can see onClick ko ek function chahey and hamara callback bhi toh ek function he hai so it will work fine.
// and jo hamara callback hai wo setColor ko call kr raha hai, function k ander ek aur fuction ko call kr rhe hai.
// onClick={() => setColor("red")}

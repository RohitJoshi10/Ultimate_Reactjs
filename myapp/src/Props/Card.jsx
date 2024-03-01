import React from "react";

function Card({ username, btnText = "visit me" }) {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDW4CBrSMVWJwrhIycXpX1680wnbpHGQaIcg9W2B_w7XtgxSH-862tTkSsaR9m7QRrhA&usqp=CAU"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Hii, I am Rohit this is the ultimate reactjs series.
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

// props is a oject
// This is destructuring { username, btnText = "visit me" }
// I can write it in this way also passing props in func and then accessing props like this props.username

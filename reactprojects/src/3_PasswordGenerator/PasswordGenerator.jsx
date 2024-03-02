import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  // Adding a state to track whether the sound should play
  const [playSound, setPlaySound] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
    // Set playSound to true to trigger the sound when the password is generated
    setPlaySound(true);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  useEffect(() => {
    // Reset playSound to false after the sound has played
    if (playSound) {
      const audio = new Audio("./sounds/sound.wav");
      audio.play();
      setPlaySound(false); // Reset playSound to false after the sound has played
    }
  }, [playSound]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-8 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-green-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;

// Here we are using the passwordGenerator every time when we are increasing the length or taking number or taking character.
// So, in that case where we want to call a function  every time during rerender.
// We can do this by useCallback hook.
// useCallback(function, dependencies) dependencies is basically the array.
// I can give onChange directly as i want to pass an event also. and that event can call setLength Property.
// And if you want to give property to setLength then type setLength(e.target.value)
// setNumberAllowed((prev) => !prev); previous value ko flip kr do.
// Now mere pass koi button toh hai ni ki jiske click hone phr mere pass password dikh jaye.
// So, i need something to call my setPassword function.
// If we try ko call it normally  setPassword(pass);
// Then this will give me this error saying React limits the number of renders to prevent an infinite loop.
// Toh iss setPassword ko call krne ka ek way toh ye hoga ki ek button banao aur fir call kara do.
// Dusra method hoga ek hum use kre useEffect hook ka.
// useEffect is a hook that lets you synchronize a component with an external system.
// useEffect(setup, dependencies)
// Now copy button phr clcik krke mera password copy ho jaye wo kaise hoga..
// Iss cheez ko krenge hum useRef hook ki help se.
// jab kisis bhi cheez ka reference muje lena hota hai toh mai useRef ka use krta hu.

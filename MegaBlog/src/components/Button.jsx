import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "text-white",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

// Chlidren means text
// type = 'button' means ki hamare button ka type by default button hai agr kuch mention nhi hai wrna submit button reset  button bhi ho skta hai ek button agr specify kia hai humne toh tab
// Agr kisi ne khud se color dia toh ye overwrite ho jayega and agr nhi dia toh by default ye he css rahegi button ki bgColor = 'text-white'
// ek property toh hai class name but aur bhi property ho skti hai wo humne li hai props mai and unko spread kr dia h and use krna hoga toh props se kr lenge
// For an ex agr kisi ne placeholder de dia ho toh wo props mai chle jayga and yes we know button mai place holder nhi hota hi it was just for the example
// Forwar ref ex:- We are making our login form and uss login form k ander hamare pass input fied alg hai.
// Toh wahi input field ko hum sab jagha use krenge username mai password mai etc.
// And hamara login page hai dusri jagha.
// But input filed ki state ka access login page ko dena padega na ...usko referece dena padega toh waha pe aata hai hamare pas ye forword referece hook.

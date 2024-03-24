import React from "react";

function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;

// Container aapse properties accept krta hai as a children.
// Container ek box hota hai jiske upper ya niche kuch hai similiar like app.jsx
// Container ek ander hum sirf styling properties define krte hai

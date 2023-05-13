//inline styling for react element
import React from "react";
import { createRoot } from "react-dom/client";

const customStyle= {
  color:"red",
  fontSize:"20px",
  border:"1px solid black"
}
customStyle.color="blue";
var root = createRoot(document.getElementById("root"));
root.render(
  <div>
<h1 style={{color:"red"}}>Hello World</h1>
<h1 style={customStyle}>Welcome to my world</h1>
  </div>
);
 

//React Components
//the component's name MUST start with an upper case letter.
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
// import Heading from "./Heading";
// import List from "./List";
// function Heading(){
//     return <h1>Hello World !</h1> ;
// }
var root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);

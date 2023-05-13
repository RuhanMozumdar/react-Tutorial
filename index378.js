//inline styling for react element
import React from "react";
import { createRoot } from "react-dom/client";
import pi, { doublePi,triplePi } from "./math";


var root = createRoot(document.getElementById("root"));
root.render(

  <div>
    <ul>
  <li>{pi} </li>
  <li>{doublePi()}</li>
  <li>{triplePi()}</li>
  </ul>
  </div>
);
 
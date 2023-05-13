import React from "react";
import {createRoot} from "react-dom/client"

const fname = "Ruhan";
const lname = "Mozumdar";
var year = new Date().getFullYear()  ;
createRoot(
  document.getElementById("root")
).render(
<div>
  <p>Created by {fname + " "+ lname} </p>
  <p>Copyright {year}</p>
</div>);
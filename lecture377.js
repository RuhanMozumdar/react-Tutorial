//inline styling for react element
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"


var root = createRoot(document.getElementById("root"));
root.render(

  <div>
    <App />  
  </div>
);
 
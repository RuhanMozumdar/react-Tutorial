import React from "react";
import { createRoot } from "react-dom/client";

const fname = "Ruhan";
const lname = "Mozumdar";
var year = new Date().getFullYear();
var root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My favourite foods </h1>
    <p>Created by {fname + " " + lname} </p>
    <p>Copyright {year}</p>
    <div>
    <img className="food-img" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?" alt="first food item"/>
    <img className="food-img" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?" alt="second food item" />
    <img className="food-img" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?"alt="third food item" />
    </div>
  </div>
);

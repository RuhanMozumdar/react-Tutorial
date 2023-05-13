import React from "react";
import {createRoot} from "react-dom/client"

const fname = "Ruhan";
const lname = "Mozumdar";
const luckyNumber = "1"; 
const randomNumber = Math.floor(Math.random()*100);  //returns a random int number less than 100
createRoot(
  document.getElementById("root")
).render(
<div>
  <h1>Hello {fname + " " +lname}</h1>
  <ul>
    <li>Your lucky number is {luckyNumber} </li>
    <li>Random number is {randomNumber} </li>
    <li>third</li>
    </ul>
  </div>);
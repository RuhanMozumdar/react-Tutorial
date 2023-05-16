import React ,{useState} from "react";
function App() { 
const [headingText,setHeadingText]=useState("Hello");
const [isMousedOver,setMousedOver]=useState(false);



function handleClick(){
  setHeadingText("submitted");
}
function handleMouseOut(){
  setMousedOver(false);
}

function handleMouseOver(){
  setMousedOver(true);
}

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMousedOver?"black":"white"}} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Submit</button>
    </div>
  );
}

export default App;

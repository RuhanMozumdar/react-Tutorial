import React from "react";
function Heading(){
const date= new Date();
const currentTime= date.getHours();
console.log(currentTime);
const customStyle= {
  color:"red",
  fontSize:"20px",
  border:"1px solid black"
}
let greeting;
if(currentTime<12){
  greeting="Good Morning";
  customStyle.color="red";
}
else if (currentTime<18) {
  greeting="Good Afternoon";
    customStyle.color="blue";

} else {
  greeting="Good Night";
    customStyle.color="green";

}

  return <div>
    <h1 style={customStyle}>{greeting}</h1>
    </div>
}

export default Heading;
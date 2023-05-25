import React, { useState } from "react";

function App() {
  const [fullName , setFullName]=useState({
    fName:"",
    lName:""
  });
function handleChange(event){
  const {value , name} = event.target;
  // const inputName=event.target.name;
  setFullName((prevValue)=>{
    if(name === "fName"){
      return {
        fName:value,
        lname:prevValue.lName
      }
    }
      else if(name ==="lName"){
        return {
          lName:value,
          fName:prevValue.fName
        }
      }
  });
}

//difference between controlled and uncontrolled components
//synthetic event
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name"
             value ={fullName.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" 
             value ={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

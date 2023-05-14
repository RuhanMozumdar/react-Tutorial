import React from "react";
import Form from "./form";


// Ternary operator
// CONDITION ? DO IF TRUE :DO IF FALSE
// ISCLOUD ==TRUE ? BRINGUMBRELLA : BRINGSUNSCREEN

// && JS
// (EXPRESSION && EXPRESSION)

// && React
// (CONDITION && EXPRESSION)
// (TRUE && EXPRESSION)
// (FALSE && EXPRESSION)

var userIsRegistered = false;

// function renderConditionally() { 
  //   if (isLoggedIn === true) {
  //   return <h1>Hello</h1>;
  // } else {
  //   return (
  //     <Login />
  //   )
  // }
// }

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    
    </div>
  );
}

// export default App;


Form.jsx

import React from "react";
import Input from "./input";
function Form(props){
  return ( <form className="form">
  <Input type="text" placeholder="Username" />
  <Input type="password" placeholder="Password" />
  {props.isRegistered===false && (  <Input type="password" placeholder="confirm" />)}

  <button type="submit">{props.isRegistered ? "login" : "register" } </button>
</form>
  )
}

// export default Form;

input.jsx


import React from "react";


function Input(props){
  return <input type={props.type} placeholder={props.placeholder} />
}

// export default Input ;
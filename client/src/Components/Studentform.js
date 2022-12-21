import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
function Studentform() {
  const [currentForm, setcurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setcurrentForm(formName);
  };
  return <div>{currentForm === "login" ? <Login /> : <Register />}</div>;
}

export default Studentform;

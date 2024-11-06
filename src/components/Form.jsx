import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* Conditionally render Confirm Password input */}
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      {/* Conditionally render button text */}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;

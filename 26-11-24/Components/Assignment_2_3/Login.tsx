import React, { useState } from "react";

function Login() {
  const [uid, setUserId] = useState("");
  const [pwd, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function loginButton_click() {
    setErrorMessage("");
    setResult("");

    if (uid === "" && pwd === "") {
      setErrorMessage("User Id and Password are required.");
    } else if (uid === "") {
      setErrorMessage("User Id is required.");
    } else if (pwd === "") {
      setErrorMessage("Password is required.");
    } else if (uid === "admin" && pwd === "admin123") {
      setResult("Welcome to Admin");
    } else {
      setResult("Invalid User Id or Password");
    }
  }

  return (
    <>
      <fieldset>
        <legend>User Login</legend>

        <label>User Id : </label>
        <input
          type="text"
          id="t1"
          placeholder="User Id"
          value={uid}
          onChange={(event) => setUserId(event.target.value)}
        />
        <br />
        <br />

        <label>Password : </label>
        <input
          type="password"
          id="t2"
          placeholder="Password"
          value={pwd}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <input
          type="button"
          id="b1"
          onClick={loginButton_click}
          value="Login"
        />
        <p>
          <a href="/" id="signup">
            Sign Up
          </a>
        </p>

        <p id="result">{result}</p>
        {errorMessage && <p>{errorMessage}</p>}
      </fieldset>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [uid, setUserId] = useState<string>("admin");
  const [pwd, setPassword] = useState<string>("admin123");
  const [result, setResult] = useState<string>("");

  let navigate = useNavigate();
  let location = useLocation();

  function loginButton_click() {
    const queryString = location.search;
    let strReturnUrl: string | null = new URLSearchParams(queryString).get(
      "returnUrl"
    );

    if (strReturnUrl === null) strReturnUrl = "/";

    if (uid === "admin" && pwd === "admin123") {
      const token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
      sessionStorage.setItem("AUTH_TOKEN", token);
      sessionStorage.setItem("USER_ROLE", "admin");
      navigate(strReturnUrl);
    } else if (uid === "user" && pwd === "user123") {
      const token = "USER_TOKEN_12345";
      sessionStorage.setItem("AUTH_TOKEN", token);
      sessionStorage.setItem("USER_ROLE", "user");
      navigate(strReturnUrl);
    } else {
      setResult("Invalid User Id or Password");
    }
  }

  function handleInputChange() {
    if (result) {
      setResult("");
    }
  }

  return (
    <>
      <fieldset>
        <legend>User Login</legend>

        <label>User Id : </label>
        <input
          type="text"
          value={uid}
          onChange={(event) => {
            setUserId(event.target.value);
            handleInputChange();
          }}
        />
        <br />
        <br />

        <label>Password : </label>
        <input
          type="password"
          value={pwd}
          onChange={(event) => {
            setPassword(event.target.value);
            handleInputChange();
          }}
        />
        <br />
        <br />

        <input type="button" onClick={loginButton_click} value="Login" />
        <p style={{ color: "red" }}>{result}</p>
      </fieldset>
    </>
  );
};

export default Login;

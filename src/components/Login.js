import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useNavigate();

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));

    var i = 0;
    for (var user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }

    if (i === 1) {
      alert("login successfull");
      localStorage.getItem("loggedin", "loggedin");
      history.push("/dashboard");
      window.location.reload(true);
    } else {
      alert("invalid login");
    }
  }

  return (
    <div className="login">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="login-logo">
          <LocalGroceryStoreIcon className="login-logoImage" fontSize="large" />
          <h2 className="login-logoTitle">E-Commerce</h2>
        </div>
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button onClick={login} type="submit" className="login-signInButton">
            Sign In
          </button>
        </form>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
          mi justo, vel dictum eros placerat ac. In hac habitasse platea
          dictumst. Integer vitae massa finibus, pharetra purus a, iaculis eros
        </p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className="login-registerButton">
            Create your E Commerce Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function RegisterUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function registeruser(event) {
    event.preventDefault();

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var newuser = {
      name: name,
      email: email,
      password: password,
    };

    users.push(newuser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration is succesfull");
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
        <h4>Create Your Account</h4>

        <form onSubmit={registeruser}>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
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

          <button type="submit" className="login-signInButton">
            Create Account
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
          mi justo, vel dictum eros placerat ac. In hac habitasse platea
          dictumst. Integer vitae massa finibus, pharetra purus a, iaculis eros
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;

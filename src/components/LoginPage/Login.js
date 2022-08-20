import React, { useState } from "react";
const users = require("../../users/users.json");

const Login = () => {
  const initialValue = {
    username: "",
    password: "",
  };
  const initialErrorState = {
    isError: null,
    errorCondition: null,
  };
  const [error, setError] = useState(initialErrorState);
  const [credentials, setCredentials] = useState(initialValue);

  const handleLoginCredentials = (e) => {
    setCredentials((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("credentials", credentials);

    if (credentials.username < 1 && credentials.password < 1) {
      setError({
        isError: true,
        errorCondition: "Please enter username and password",
      });
    } else if (credentials.username < 1) {
      setError({ isError: true, errorCondition: "Please enter username" });
    } else if (credentials.password < 1) {
      setError({ isError: true, errorCondition: "Please enter Password" });
    } else {
      setError(initialErrorState);
      const loggedInUser = users.filter((eachUser) => {
        if (
          (eachUser.username === credentials.username) &
          (eachUser.password === credentials.password)
        ) {
          return eachUser.username;
        }
      });

      if (loggedInUser.length < 1) {
        setError({
          isError: true,
          errorCondition: "Inavlid username or password",
        });
      } else {
        localStorage.setItem("user", loggedInUser[0].username);
        console.log("loggedInUser", loggedInUser);
      }
      setCredentials(initialValue);
    }
  };
  // console.log(error, error.username);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username || ""}
            onChange={handleLoginCredentials}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={credentials.password || ""}
            placeholder="Password"
            onChange={handleLoginCredentials}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </>
  );
};

export default Login;

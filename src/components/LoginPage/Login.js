import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const users = require("../../resources/users.json");

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    // console.log(userLoggedIn);
    if (userLoggedIn) {
      navigate("/home");
    }
  }, []);

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
        // console.log("loggedInUser", loggedInUser);
        navigate("/home");
      }
      setCredentials(initialValue);
    }
  };
  // console.log(error, error.username);
  return (
    <>
      <section className="h-full w-full gradient-form bg-gray-200 md:h-screen">
        {/* <div className="container "> */}
        <div className="flex container justify-center py-12 px-6 items-center flex-wrap h-full text-gray-800">
          <div className=" bg-white shadow-lg rounded-lg">
            <div className="bg-indigo-500">
              <h4 className="text-xl font-semibold p-4 mb-8  text-center">
                Dish POLL{" "}
              </h4>
            </div>
            <form className="p-4 md:p-12 ">
              <p className="mb-4 text-center">Login</p>
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 "
                  placeholder="Username"
                  value={credentials.username || ""}
                  onChange={handleLoginCredentials}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 "
                  value={credentials.password || ""}
                  placeholder="Password"
                  onChange={handleLoginCredentials}
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  className="inline-block px-6 py-2.5 text-slate-100 font-medium bg-indigo-500 text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="button"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
                {/* {error.isError && (
                  <> */}
                <p className="text-gray-500 w-[250px] ">
                  {error.errorCondition}
                </p>
                {/* </>
                )} */}
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Login;

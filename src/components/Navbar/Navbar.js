import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("user");

    if (isUserLoggedIn) {
      console.log("isUserLoggedIn", isUserLoggedIn);
    } else navigate("/");
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row space-y-2 justify-between items-center px-10 py-2 shadow-md bg-indigo-50 mb-10">
        <h1 className="text-2xl font-extrabold tracking-widest min-w-[125px] sm:py-2 py-4">
          Dish Poll
        </h1>
        <div className="w-3/6 flex justify-around items-center min-w-[350px] sm:min-w-[500px] sm:pb-2 pb-4">
          <div className="flex min-w-[150px] justify-between font-semibold  ">
            <Link to={"/home"}>Poll</Link>
            <Link to={"/home/result"}> Results</Link>
          </div>
          <div className="flex space-x-2 md:space-x-10 ">
            <h1 className="p-2 ">
              {" "}
              hey, {localStorage.getItem("user")?.toUpperCase()}
            </h1>
            <button
              className="bg-indigo-500 p-2 text-white"
              onClick={logoutUser}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

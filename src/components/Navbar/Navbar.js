import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("user");
    if (!isUserLoggedIn) navigate("/login");
  }, []);

  // if (!userName) navigate("/login");

  const logoutUser = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const setActiveState = (e) => {
    setIsActive(Number(e.target.id));
  };

  return (
    <div>
      {!!userName && (
        <>
          <div className="flex  flex-col sm:flex-row space-y-2 justify-between uppercase items-center px-10 py-2 shadow-md bg-indigo-100 w-full">
            <h1
              className="text-2xl font-extrabold tracking-widest min-w-[125px] sm:py-2 py-4 cursor-pointer"
              onClick={() => {
                navigate("/home/poll");
              }}
            >
              Dish Poll
            </h1>

            <div className="w-3/6 flex justify-around items-center min-w-[350px] sm:min-w-[500px] sm:pb-2 pb-4">
              <div className="flex min-w-[150px] md:min-w-[300px] justify-around">
                <Link
                  to={"/home/poll"}
                  className={` px-4 border-b-2  py-1 rounded-sm ${
                    isActive === 1 ? "bg-indigo-300 " : " "
                  }`}
                  id={1}
                  onClick={setActiveState}
                >
                  Poll
                </Link>
                <Link
                  to={"/home/result"}
                  id={2}
                  className={` px-4 border-b-2  py-1 rounded-sm  ${
                    isActive === 2 ? "bg-indigo-300 " : " "
                  }`}
                  onClick={setActiveState}
                >
                  Results
                </Link>
              </div>

              <div className="flex space-x-2 md:space-x-10 justify-around min-w-[200px] ">
                <h1 className="p-2 ">
                  {localStorage.getItem("user")?.toUpperCase()}
                </h1>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 active:text-gray-900 active:bg-indigo-100 px-4 py-2 uppercase text-white rounded-sm"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

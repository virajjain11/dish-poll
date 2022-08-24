import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
const data = require("../../../resources/db.json");

const Poll = ({ setIsActive }) => {
  const initialState = {
    1: null,
    2: null,
    3: null,
  };
  const [rankings, setRankings] = useState(initialState);

  useEffect(() => {
    setIsActive(1);
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      const getUserData = localStorage.getItem("userData");
      if (!getUserData) {
        let newUserData = {
          [currentUser]: initialState,
        };
        localStorage.setItem("userData", JSON.stringify(newUserData));
      }
      if (!JSON.parse(getUserData)?.[currentUser]) {
        const modifyUserData = {
          ...JSON.parse(getUserData),
          [currentUser]: initialState,
        };
        localStorage.setItem("userData", JSON.stringify(modifyUserData));
      }

      const updateUserDataOnRankClicked = {
        ...JSON.parse(getUserData),
        [currentUser]: rankings,
      };
      localStorage.setItem(
        "userData",
        JSON.stringify(updateUserDataOnRankClicked)
      );
    }
  }, [rankings]);

  return (
    <div>
      <div className="mx-auto mt-8 max-w-[360px]   sm:max-w-[570px]  text-center space-y-2 ">
        <h1 className="text-2xl mb-4">
          Welcome,{"  "}
          <span className="text-indigo-800 font-semibold">
            {localStorage.getItem("user")?.toUpperCase()}{" "}
          </span>
        </h1>
        <p className="text-lg text-gray-600 ">
          Please rate our dishes as 1, 2, or 3. The dishes will receive 30, 20,
          and 10 points, respectively.
        </p>
      </div>
      <div className=" flex w-10/12 flex-wrap justify-center mx-auto my-10">
        {data.map((dish, index) => (
          <>
            <DishCard
              key={index}
              rankings={rankings}
              setRankings={setRankings}
              dish={dish}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Poll;

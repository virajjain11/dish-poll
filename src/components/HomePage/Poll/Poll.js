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
        console.log("no userDataFound found...creating one", getUserData);
        localStorage.setItem("userData", JSON.stringify(newUserData));
      }
      console.log(" getUserData exists", JSON.parse(getUserData));
      if (!JSON.parse(getUserData)?.[currentUser]) {
        console.log("no userData with current user Logged....create a db");
        const modifyUserData = {
          ...JSON.parse(getUserData),
          [currentUser]: initialState,
        };
        localStorage.setItem("userData", JSON.stringify(modifyUserData));
      }
      console.log(
        " getUserData found with current user",
        JSON.parse(getUserData)
      );

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

  console.log("rankings", rankings);

  return (
    <div>
      <div className="mx-auto mt-8 max-w-[380px] text-center space-y-2 ">
        <h1 className="text-xl mb-4">
          Welcome, {localStorage.getItem("user").toUpperCase()}{" "}
        </h1>
        <p className="text-base">
          Please rate our dishes as 1st,2nd or 3rd. {/* </p> */}
          {/* <p> */}
          Dish ranked 1,2 and 3 will allocate 30, 20 and 10 points accorndingly
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

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DishCard from "./DishCard";
import { useNavigate } from "react-router-dom";
const data = require("../../resources/db.json");

const Poll = () => {
  //   console.log("db", data);
  const navigate = useNavigate();

  const initialState = {
    1: null,
    2: null,
    3: null,
  };
  const [rankings, setRankings] = useState(initialState);
  useEffect(() => {
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
    }
  }, [rankings]);

  console.log("rankings", rankings);

  return (
    <div>
      <Navbar />
      <h1>Please rate our dishes</h1>
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

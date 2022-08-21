import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DishCard from "./DishCard";
const data = require("../../resources/db.json");

const Poll = () => {
  //   console.log("db", data);
  const initialState = {
    1: null,
    2: null,
    3: null,
  };
  const [rankings, setRankings] = useState(initialState);
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

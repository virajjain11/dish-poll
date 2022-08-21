import React from "react";
import Navbar from "../Navbar/Navbar";
import DishCard from "./DishCard";
const data = require("../../resources/db.json");

const Poll = () => {
  //   console.log("db", data);

  return (
    <div>
      <Navbar />
      <h1>Please rate our dishes</h1>
      <div className=" flex w-10/12 flex-wrap justify-center mx-auto my-10">
        {data.map((dish, index) => (
          <>
            <DishCard key={index} dish={dish} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Poll;

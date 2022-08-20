import React from "react";
import Navbar from "../Navbar/Navbar";
const data = require("../../resources/db.json");

const Poll = () => {
  console.log("db", data);
  return (
    <div>
      <Navbar />
      <h1>Poll</h1>
    </div>
  );
};

export default Poll;

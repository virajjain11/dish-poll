import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import PointsTable from "./PointsTable";

const Result = () => {
  const [rawUserData, setRawUserData] = useState([]);
  let dishPointsData = {};
  const points = [30, 20, 10];

  useEffect(() => {
    const jsonData = localStorage.getItem("userData");
    const fetchUserData = JSON.parse(jsonData);
    const getAllUserValues = Object.values(fetchUserData);
    setRawUserData(getAllUserValues);
  }, []);

  rawUserData.forEach((obj) => {
    // console.log("each objjjj", obj);
    Object.entries(obj).forEach(([key, value], index) => {
      // console.log("keyy:valueee", key, value, points[+key - 1], points);
      if (!!value) {
        if (value in dishPointsData) {
          // console.log(
          //   "present in dishPoints",
          //   dishPointsData[value],
          //   "before...."
          // );

          dishPointsData = {
            ...dishPointsData,
            [value]: dishPointsData[value] + points[+key - 1],
          };
        } else {
          // console.log("not present....create new");

          dishPointsData = {
            ...dishPointsData,
            [value]: points[+key - 1],
          };
        }
      }
    });
  });
  const sortedDishes = Object.entries(dishPointsData).sort(
    (a, b) => b[1] - a[1]
  );
  // .filter((el, idx) => idx < 3);
  console.log(dishPointsData);

  return (
    <div>
      <Navbar />
      <h1>Result</h1>
      <PointsTable DishData={sortedDishes} />
    </div>
  );
};

export default Result;

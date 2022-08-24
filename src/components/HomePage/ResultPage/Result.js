import React, { useEffect, useState } from "react";
import PointsTable from "./PointsTable";

const Result = ({ setIsActive }) => {
  const [rawUserData, setRawUserData] = useState([]);
  let dishPointsData = {};
  const points = [30, 20, 10];

  useEffect(() => {
    const jsonData = localStorage.getItem("userData");
    const fetchUserData = JSON.parse(jsonData);
    if (!!fetchUserData) {
      const getAllUserValues = Object.values(fetchUserData);
      setRawUserData(getAllUserValues);
    }
    setIsActive(2);
  }, []);

  rawUserData.forEach((obj) => {
    Object.entries(obj).forEach(([key, value], index) => {
      if (!!value) {
        if (value in dishPointsData) {
          dishPointsData = {
            ...dishPointsData,
            [value]: dishPointsData[value] + points[+key - 1],
          };
        } else {
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

  return (
    <div className="mt-10">
      <PointsTable DishData={sortedDishes} />
    </div>
  );
};

export default Result;

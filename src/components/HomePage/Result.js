import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Result = () => {
  const [rawData, setRawData] = useState([]);
  let dishPointsData = {};
  const points = [30, 20, 10];
  useEffect(() => {
    const jsonData = localStorage.getItem("userData");
    const userData = JSON.parse(jsonData);
    const keys = Object.values(userData);
    setRawData(keys);
  }, []);
  //
  rawData.forEach((obj) => {
    console.log("each objjjj", obj);
    Object.entries(obj).forEach(([key, value], index) => {
      console.log("keyy:valueee", key, value, points[+key - 1], points);
      if (!!value) {
        if (value in dishPointsData) {
          console.log(
            "present in dishPoints",
            dishPointsData[value],
            "before...."
          );
          // console.log();
          // setDishPointsData((prevData) => ({
          //   ...prevData,
          //   [value]: prevData[value] + points[num + 1],
          // }));
          dishPointsData = {
            ...dishPointsData,
            [value]: dishPointsData[value] + points[+key - 1],
          };
        } else {
          console.log("not present....create new");
          // setDishPointsData((prevData) => ({
          //   ...prevData,
          //   [value]: points[num + 1],
          // }));
          dishPointsData = {
            ...dishPointsData,
            [value]: points[+key - 1],
          };
        }
      }
    });
  });

  //
  console.log(dishPointsData);

  return (
    <div>
      <Navbar />
      <h1>Result</h1>
    </div>
  );
};

export default Result;

// keys.forEach((obj) => {
//   // console.log("objj", obj[1], obj[2], obj[3]); 2-Pho, 1-Lasagne, 4-Scotch Eggs
//   let i = 1;
//   console.log("obj", obj, !!obj[i]);
//   const points = [null, 30, 20, 10];

//   if (!!obj[1]) {
//     console.log("here", 1);
//     if (obj[1] in dishPointsData) {
//       console.log("iiiii", 1);
//       // dish key exists
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[1]]: prevData[obj[1]] + points[1],
//       }));
//     } else {
//       //create dish key
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[1]]: points[1],
//       }));
//     }
//   }
//   if (!!obj[2]) {
//     console.log("here", 2);
//     if (obj[2] in dishPointsData) {
//       console.log("iiiii", 2);
//       // dish key exists
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[2]]: prevData[obj[2]] + points[2],
//       }));
//     } else {
//       //create dish key
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[2]]: points[2],
//       }));
//     }
//   }
//   if (!!obj[3]) {
//     console.log("here", 3);
//     if (obj[3] in dishPointsData) {
//       console.log("iiiii", 3);
//       // dish key exists
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[3]]: prevData[obj[3]] + points[3],
//       }));
//     } else {
//       //create dish key
//       setDishPointsData((prevData) => ({
//         ...prevData,
//         [obj[3]]: points[3],
//       }));
//     }
//   }
// });

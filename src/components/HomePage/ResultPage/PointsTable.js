import React from "react";

const PointsTable = ({ DishData }) => {
  console.log("DishData", DishData);
  return (
    <>
      {DishData.length > 0 ? (
        <>
          <div className="w-full max-w-2xl mx-auto text-gray-600 px-4 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg tracking-wide uppercase text-gray-800 text-center">
                Points Table
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">sl.no</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">id</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">dish</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">points</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {DishData.map(([dishName, points], index) => (
                      <>
                        <tr key={index}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-base ">
                              {index + 1}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-base ">
                              {dishName.split("-")[0]}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-base font-medium text-gray-800 ">
                              {dishName.split("-")[1]}{" "}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-center">{points}</div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <h1 className="text-2xl text-gray-800">
              Please rate our dishes first.
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default PointsTable;

// <tr>
//   <td></td>
//   <td>{dishName.split("-")[0]}</td>
//   <td>{dishName.split("-")[1]}</td>
//   <td>{points}</td>
// </tr>

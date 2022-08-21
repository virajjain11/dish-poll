import React from "react";

const DishCard = ({ dish, setRankings, rankings }) => {
  const ratings = ["1", "2", "3"];
  const handleRank = (e) => {
    const values = e.currentTarget.id.split("-");
    // console.log(values);
    setRankings((prev) => ({ ...prev, [values[0]]: values[1] }));
  };
  return (
    <>
      <div className="rounded-lg shadow-lg bg-white max-w-sm  mx-5 mb-10">
        <h5 className="text-gray-900 text-xl font-medium  text-center bg-indigo-100 py-4 rounded-t-lg">
          {dish.dishName}
        </h5>
        <img className="rounded-b-lg w-full " src={dish.image} alt="" />
        <div className="p-6">
          <p className="text-gray-700  pb-2 mb-4 border-b min-h-[130px] text-center  border-gray-300">
            {dish.description}
          </p>
          <div className="flex justify-around">
            {ratings.map((rating) => (
              <>
                <div
                  id={`${rating}-${dish.dishName}`}
                  key={rating}
                  onClick={handleRank}
                  className="inline-block px-6 py-4  text-black  rounded-[50%] hover:bg-indigo-300 hover:shadow-lg hover:outline-none shadow-md transition duration-150 ease-in-out"
                >
                  {rating}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;

// focus:bg-blue-700 focus:shadow-lg focus:outline-none active:bg-indigo-300 active:shadow-lg

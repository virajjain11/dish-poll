import React from "react";

const DishCard = ({ dish, setRankings, rankings }) => {
  const ratings = ["1", "2", "3"];

  const handleRank = (e) => {
    const [dishRank, dishId, dishName] = e.currentTarget.id.split("-");
    console.log(dishRank, dishName);

    let [isDishPresent] = Object.keys(rankings).filter(
      (rank) => rankings[rank] === `${dishId}-${dishName}`
    );
    console.log("keys", isDishPresent);
    if (isDishPresent) {
      //add remove rank option if clicked on same button
      if (isDishPresent === dishRank) {
        console.log("sameee button clicked...remove rannk");
        setRankings((prev) => ({
          ...prev,
          [dishRank]: null,
        }));
      } else {
        setRankings((prev) => ({
          ...prev,
          [isDishPresent]: null,
          [dishRank]: `${dishId}-${dishName}`,
        }));
      }
    } else {
      setRankings((prev) => ({
        ...prev,
        [dishRank]: `${dishId}-${dishName}`,
      }));
    }
  };
  return (
    <>
      <div className="rounded-lg shadow-lg bg-white max-w-sm  mx-5 mb-10">
        <h5 className="text-gray-900 text-xl font-medium text-center bg-indigo-100 py-4 rounded-t-lg">
          {dish.dishName}
        </h5>
        <img className="rounded-b-lg w-full " src={dish.image} alt="" />
        <div className="p-6">
          <p className="text-gray-700  pb-2 mb-4 border-b  text-center  border-gray-300">
            ID:{dish.id}
          </p>
          <p className="text-gray-700  pb-2 mb-4 border-b min-h-[130px] text-center  border-gray-300">
            {dish.description}
          </p>
          <div className="flex justify-around">
            {ratings.map((rating) => (
              <>
                <div
                  id={`${rating}-${dish.id}-${dish.dishName}`}
                  key={rating}
                  onClick={handleRank}
                  className={`inline-block px-6 py-4  text-black  rounded-[50%] hover:bg-indigo-300 hover:shadow-lg hover:outline-none shadow-md transition duration-150 ease-in
                    ${
                      rankings[rating] === `${dish.id}-${dish.dishName}`
                        ? " bg-indigo-400 "
                        : "bg-white "
                    }
                    `}
                >
                  {rating}
                </div>
              </>
            ))}
          </div>
          {/* <div className="text-center tracking-widest mt-4 mx-auto max-w-[80px] px-4 py-2  bg-pink-400">
            CLEAR
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DishCard;

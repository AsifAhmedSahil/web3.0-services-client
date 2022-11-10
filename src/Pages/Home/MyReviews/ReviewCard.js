import React from "react";

const ReviewCard = ({ service }) => {
  const { image, Review, Rating } = service;
  return (
    <div class="flex justify-center ">
      <div class="rounded-lg shadow-lg bg-white w-full text-center">
        <a href="#!">
          <img class="rounded-full w-32 " src={image} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            Ratings: {Rating} star
          </h5>
          <p class="text-gray-700 text-base mb-4">{Review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

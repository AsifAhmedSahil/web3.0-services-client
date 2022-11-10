import React from "react";

const MyReviewCard = ({ order,handleDelete }) => {
    console.log(order);
  const { Review, image, Rating ,_id,status } = order;

 
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex justify-center border  ">
        <div className="rounded-lg shadow-lg bg-white w-full text-center">
          <a href="#!">
            <img className="rounded-full w-32  " src={image} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Ratings: {Rating} star
            </h5>
            <p className="text-gray-700 text-base mb-4">{Review}</p>
          </div>
          <button className="btn bg-blue-600 text-white p-2 mx-2" onClick={()=>handleDelete(_id)}>Delete</button>
          <button className="btn bg-blue-600 text-white p-2">{status ? status : 'pending'}</button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;

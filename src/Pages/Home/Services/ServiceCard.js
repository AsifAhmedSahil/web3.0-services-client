import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
  const[loading,setLoading] = useState(false)

  if(loading){
    return <div class="flex justify-center items-center">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>}
  console.log(service);
  const { _id, img, price, title, description } = service;
 
  return (
    <div>
      <div class="flex justify-center mt-8">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
          </PhotoProvider>

          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <h6 className="text-2xl font-semibold">Price: $ {price}</h6>
            <p class="text-gray-700 text-base mb-4">{description?.length > 100 ? description.slice(0,100) : description}</p>
            <Link to={`/services/${_id}`}>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

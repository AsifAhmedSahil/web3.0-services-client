import React from "react";
import { Link } from "react-router-dom";

// import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
  console.log(service)
    const {_id,img,price,title,description} = service;
  return (
    <div>
      <div class="flex justify-center mt-8">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          
            <img
              class="rounded-t-lg"
              src={img}
              // sizes={50}
              alt=""
            />
          
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <h6 className="text-2xl font-semibold">Price: $ {price}</h6>
            <p class="text-gray-700 text-base mb-4">
              {description}
            </p>
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

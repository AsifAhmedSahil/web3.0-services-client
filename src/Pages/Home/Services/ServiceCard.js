import React from "react";

const ServiceCard = ({service}) => {
    const {img,price,title,description} = service;
  return (
    <div>
      <div class="flex justify-center mt-8">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src={img}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <h6 className="text-2xl font-semibold">Price: $ {price}</h6>
            <p class="text-gray-700 text-base mb-4">
              {description}
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

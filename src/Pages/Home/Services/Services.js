import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  

  

  useEffect(() => {
    fetch("https://service-server-pearl.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
      
      // console.log(services);
  }, []);
 
  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl font-semibold mb-10">Our Services</h2>
        <p>
          We Provide Decentralized Application, NFT Marketplace ,Blockchain Game Development ...
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex space-x-2 justify-center mt-10">
        <Link to="/allservices">
        <button
          type="button"
          class="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 font-medium text-xl leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
        >
          See all!
        </button>
        </Link>
      </div>
    </>
  );
};

export default Services;

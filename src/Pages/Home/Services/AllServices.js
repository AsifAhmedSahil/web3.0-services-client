import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("https://service-server-pearl.vercel.app/allservices")
        .then((res) => res.json())
        .then((data) => setServices(data));
        
    },[]);
  return (
    <div className='mb-10'>
      <div className="text-center mt-10 ">
        <h2 className="text-5xl font-semibold">Our Services</h2>
        
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      
    </div>
  )
}

export default AllServices
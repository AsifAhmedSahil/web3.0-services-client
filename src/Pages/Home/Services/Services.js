import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
  return (
    <>
    <div className='text-center'>
        <h2 className='text-5xl font-semibold'>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere impedit unde aliquid ipsam alias labore adipisci provident mollitia, animi repellendus!</p>
        
    </div>
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>
    <div className="flex space-x-2 justify-center mt-10">
    <button type="button" class="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 font-medium text-xl leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ">See all!</button>
    </div>
    </>
  )
}

export default Services
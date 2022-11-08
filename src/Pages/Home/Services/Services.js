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
    </>
  )
}

export default Services
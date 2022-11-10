import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleServices = () => {
    const {price,title,img,description} = useLoaderData();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div className='cardDetails'>
      <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-xl">
    <a href="#!">
      <img className="rounded-t-lg w-full" src={img} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Price: ${price}</h5>
      <p className="text-gray-700 text-base mb-4 ">
        {description}
      </p>
      
    </div>
  </div>
</div>

      </div>
      <div>hello</div>
    </div>
  )
}

export default SingleServices
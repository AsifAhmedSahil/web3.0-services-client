import React from 'react'
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    const handleSubmit =  (e) => {
        e.preventDefault();
        const product = {
          name: e.target.name.value,
          price: e.target.price.value,
          image: e.target.image.value
        };
        // console.log(product)
        fetch("https://service-server-pearl.vercel.app/addservices",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
            

        }).then(res => res.json())
        .then(data =>{
            if(data.success){
                console.log("successful");
                toast.success("successfully add service")
                e.target.reset()
                // return <Navigate to="/allservices"></Navigate>
                
            }
        })
        .catch(err => console.log(err))
        
    }
    
  return (
    <div className="py-32 px-10 min-h-screen w-full">
    <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-5">
          <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // defaultValue={product?.name}
            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div className="flex items-center mb-5">
          <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
            Price
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            // defaultValue={product?.price}
            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div className="flex items-center mb-10">
          <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
            Image
          </label>
          <input
            type="text"
            name="image"
            placeholder="url"
            // defaultValue={product?.image}
            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
          {/* <img src={product?.image} className="w-20" alt="" /> */}
        </div>

        <div className="text-right">
          <button className="py-3 px-8 bg-green-400 text-white font-bold">Add</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddServices
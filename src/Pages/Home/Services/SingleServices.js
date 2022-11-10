import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ReviewCard from "../MyReviews/ReviewCard";
import { data } from "autoprefixer";

const SingleServices = () => {
  
  const [services, setServices] = useState([]);
  // const [review,reviewData] = useState([])
  const { price, title, img, description ,_id } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(services)

  useEffect(() => {
    fetch("https://service-server-pearl.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => setServices(data));

      
      
      
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      service:_id,
      Review: e.target.name.value,
      Rating: e.target.price.value,
      Email: e.target.email.value,
      image: e.target.image.value,
      timestamp:Date.now(),
    };
    // console.log(product)
    fetch("https://service-server-pearl.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("successful");
          toast.success("successfully add service");
          e.target.reset();
        }
        const newReview = [...services,product]
        setServices(newReview)

      })
      .catch((err) => console.log(err));
  };

  
  console.log(user);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-40">
      <div className="cardDetails">
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-xl">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {title}
              </h5>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Price: ${price}
              </h5>
              <p className="text-gray-700 text-base mb-4 ">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-32 px-10 min-h-screen w-full">
        <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form onSubmit={handleSubmit}>
            
           

            {
              user?.email ? 
              <>
              <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Review:
              </label>
              <input
                type="text"
                name="name"
                placeholder="review"
                // defaultValue={product?.name}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Rating:
              </label>
              <input
                type="text"
                name="price"
                placeholder="Rating"
                // defaultValue={product?.price}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
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
                defaultValue={user?.photoURL}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
              {/* <img src={product?.image} className="w-20" alt="" /> */}
            </div>
              <div className="text-right">
              <button className="py-3 px-8 bg-green-400 text-white font-bold">
                Add
              </button>
            </div>
              </>
            : 
            <div className="text-center">
              <h1 className="text-3xl">Add A Review?</h1>
              <h2 className="text-2xl">Please Login !</h2>
              
            </div>

            }
            
          </form>
        </div>
      </div>
    </div>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {services.map((service) => (
      
      <ReviewCard key={service._id} service={service}></ReviewCard>
    ))}
  </div>
    </>
  );
};

export default SingleServices;

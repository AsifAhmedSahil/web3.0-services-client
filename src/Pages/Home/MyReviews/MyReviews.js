import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    
    const {user} = useContext(AuthContext)

    const [orders,setOrders] = useState({})
    console.log(orders);

   

    useEffect(() => {
      fetch(`http://localhost:5000/allReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user?.email]);

   
  return (
    <div>
        {/* {orders.map((order)=>(
            <MyReviewCard key={order._id} order={order}></MyReviewCard>

        ))} */}
        {
            orders.length
        }
    </div>
  )
}

export default MyReviews


 // useEffect(() => {
    //   fetch("https://service-server-pearl.vercel.app/allReviews")
    //     .then((res) => res.json())
    //     .then((data) => setServices(data));
    //     console.log(services);
    // },[]);
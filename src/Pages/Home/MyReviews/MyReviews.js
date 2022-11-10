import { info } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    
    const {user} = useContext(AuthContext)

    const [orders,setOrders] = useState([])
    console.log(orders);

   

    useEffect(() => {
      fetch(`http://localhost:5000/allReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm("Are You Sure?");
            if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                toast("Successfully Deleted!")
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining)
                    

                }
            })
            }
          }
   

          
  return (
    <div>
        <ToastContainer />
        {
            
            orders.length == 0 ? <h1>loading</h1> :
            orders.map(order=>
                <MyReviewCard key={order._id} order={order} handleDelete={handleDelete}></MyReviewCard>
    
            )
        }
        {/* {
            orders.length
        } */}
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
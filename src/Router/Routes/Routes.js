import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/Home/AddServices/AddServices";
import Blog, { Faq } from "../../Pages/Home/Faq";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/Home/MyReviews/MyReviews";
import AllServices from "../../Pages/Home/Services/AllServices";
import SingleServices from "../../Pages/Home/Services/SingleServices";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/blogs",
                element:<Faq></Faq>
            },
            {
                path:"/myreviews",
                element:<MyReviews></MyReviews>
            },
            {
                path:"/addservices",
                element:<AddServices/>
            },
            {
                path:"/allservices",
                element:<AllServices/>
            },
            {
                path:"/services/:id",
                element:<SingleServices/>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
]);

export default router;

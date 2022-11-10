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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
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
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
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
                loader:({params})=>fetch(`https://service-server-pearl.vercel.app/services/${params.id}`)
            },
        ]
    }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Components/Pages/Home/Home";
import Category from "../../Components/Pages/Category/Category/Category";
import News from "../../Components/Pages/News/News/News";
import Login from "../../Components/Pages/Login/Login/Login";
import Register from "../../Components/Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Components/Pages/Shared/Outhers/TermsAndConditions/TermsAndConditions";
import Profile from "../../Components/Pages/Shared/Outhers/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])
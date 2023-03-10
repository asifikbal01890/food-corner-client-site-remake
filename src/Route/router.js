import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import CardDetails from '../Pages/Foods/CardDetails/CardDetails';
import Foods from '../Pages/Foods/Foods';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import MyReview from '../Pages/MyReview/MyReview';
import SignUp from '../Pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              loader: () => fetch('https://food-corner-server-site-remake.vercel.app/foodsLimit'),
              element: <Home></Home>
            },
            {
              path: "/foods",
              loader: () => fetch('https://food-corner-server-site-remake.vercel.app/foods'),
              element: <Foods></Foods>
            },
            {
              path: "/foods/:id",
              loader: ({params}) => fetch(`https://food-corner-server-site-remake.vercel.app/foods/${params.id}`),
              element:<CardDetails></CardDetails>
            },
            {
              path: "/blog",
              loader: () => fetch('https://food-corner-server-site-remake.vercel.app/blogs'),
              element: <Blog></Blog>
            },
            {
              path: "/myreview",
              element: <MyReview></MyReview>
            },
            {
              path: "/login",
              element: <LogIn></LogIn>
            },
            {
              path: "/register",
              element: <SignUp></SignUp>
            }
          ]
    }
])


export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Error from '../Pages/ErrorPage/Error';
import BioData from '../Pages/BioData/BioData';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          errorElement: <Error />,
          children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'bioData',
                element: <BioData />,
            },
            {
                path: 'bioData/:id',
                element: <BioData />,
            },
            {
                path: 'aboutUs',
                element: <AboutUs />,
            },
            {
                path: 'contactUs',
                element: <ContactUs />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
          ]
        },
      ]);

export default router;
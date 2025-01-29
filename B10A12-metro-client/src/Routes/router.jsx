import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Error from '../Pages/ErrorPage/Error';
import BioData from '../Pages/BioData/BioData/BioData';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Secrets from '../Pages/Shared/Secrets/Secrets';
import PrivateRoute from './PrivateRoute';
import DashBoard from '../Layout/DashBoard';
import EditBio from '../Pages/DashBoard/EditBio';
import BioDataDetails from '../Pages/BioData/BioDataDetails/BioDataDetails';



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
                element: <BioData />
            },
            {
                path: 'bioData/:id',
                element: <BioDataDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/bioData/${params.id}`)

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
            {
                path: 'secrets',
                element: <PrivateRoute><Secrets /></PrivateRoute>,
            },
          ]
        },
        {
            path: 'dashboard',
            element: <PrivateRoute><DashBoard /></PrivateRoute>,
            children: [
               {
                path: 'editBio',
                element: <EditBio />,
               },

            ]
        },
      ]);

export default router;
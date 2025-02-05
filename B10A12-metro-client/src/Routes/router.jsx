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
import BioDataDetails from '../Pages/BioData/BioDataDetails/BioDataDetails';
import EditBioData from '../Pages/DashBoard/EditBioData/EditBioData';
import DashBoardLayout from '../Layout/DashBoardLayout';
import DashBoardHome from '../Pages/DashBoard/DashBoardHome/DashBoardHome';
import SuccessStoryDetails from '../Pages/Home/SuccessStory/SuccessStoryDetails';
import ViewBio from '../Pages/DashBoard/ViewBio/ViewBio';
import ContactRequest from '../Pages/DashBoard/ContactRequest/ContactRequest';
import FavoriteBio from '../Pages/DashBoard/FavoriteBio/FavoriteBio';
import CreateStory from '../Pages/DashBoard/CreateStory/CreateStory';






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
                path: '/successReview/:id',
                element: <SuccessStoryDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/successReview/${params.id}`)
            },
            {
                path: 'bioData',
                element: <BioData />
            },
            {
                path: 'bioData/:id',
                element: <PrivateRoute> <BioDataDetails /> </PrivateRoute>,
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
            element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
            children: [
               { index: true, element: <DashBoardHome /> },
               {
                path: 'editBio',
                element: <EditBioData />, 
               },
               {
                path: 'viewBio',
                element: <ViewBio />, 
               },
               {
                path: 'contact-request',
                element: <ContactRequest />, 
               },
               {
                path: 'favoriteBio',
                element: <FavoriteBio />, 
               },
               {
                path: 'createStory',
                element: <CreateStory />, 
               }
            ]
        },
      ]);

export default router;
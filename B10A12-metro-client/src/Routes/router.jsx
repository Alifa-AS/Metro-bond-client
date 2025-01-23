import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Error from '../Pages/ErrorPage/Error';


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
          ]
        },
      ]);

export default router;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/ErrorPage/Error";
import BioData from "../Pages/BioData/BioData/BioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BioDataDetails from "../Pages/BioData/BioDataDetails/BioDataDetails";
import EditBioData from "../Pages/DashBoard/EditBioData/EditBioData";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import SuccessStoryDetails from "../Pages/Home/SuccessStory/SuccessStoryDetails";
import ViewBio from "../Pages/DashBoard/ViewBio/ViewBio";
import ContactRequest from "../Pages/DashBoard/ContactRequest/ContactRequest";
import FavoriteBio from "../Pages/DashBoard/FavoriteBio/FavoriteBio";
import CreateStory from "../Pages/DashBoard/CreateStory/CreateStory";
import ManageUsers from "../Pages/DashBoard/Admin Dashboard/ManageUsers/ManageUsers";
import ApprovePremium from "../Pages/DashBoard/Admin Dashboard/ApprovePremium/ApprovePremium";
import ApproveContact from "../Pages/DashBoard/Admin Dashboard/ApproveContact/ApproveContact";
import AdminDashboard from "../Pages/DashBoard/Admin Dashboard/AdminDashboard/AdminDashboard";
import AdminRoutes from "./AdminRoutes";
import Payment from "../Pages/BioData/Payment/Payment";
import SuccessStories from "../Pages/DashBoard/Admin Dashboard/SuccessStories/SuccessStories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/successReview/:id",
        element: <SuccessStoryDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/successReview/${params.id}`),
      },
      {
        path: "bioData",
        element: <BioData />,
        loader: () => fetch("http://localhost:5000/bioDataCount"),
      },
      {
        path: "bioData/:id",
        element: <PrivateRoute><BioDataDetails /></PrivateRoute>,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/bioData/${params.id}`, {
           headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                   },
               })
        .then(res => res.json()),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashBoardHome />
          </PrivateRoute>
        ),
      },
      {
        path: "editBio",
        element: (
          <PrivateRoute>
            <EditBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "viewBio",
        element: (
          <PrivateRoute>
            <ViewBio />
          </PrivateRoute>
        ),
      },
      {
        path: "contact-request",
        element: (
          <PrivateRoute>
            <ContactRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "favoriteBio",
        element: (
          <PrivateRoute>
            <FavoriteBio />
          </PrivateRoute>
        ),
      },
      {
        path: "createStory",
        element: (
          <PrivateRoute>
            <CreateStory />
          </PrivateRoute>
        ),
      },

      //admin routes
      {
        path: "adminDashboard",
        element: (
          <AdminRoutes>
            <AdminDashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "approvePremium",
        element: (
          <AdminRoutes>
            <ApprovePremium />
          </AdminRoutes>
        ),
      },
      {
        path: "approvedContact",
        element: (
          <AdminRoutes>
            <ApproveContact />
          </AdminRoutes>
        ),
      },
      {
        path: "successStories",
        element: (
          <AdminRoutes>
            <SuccessStories />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;

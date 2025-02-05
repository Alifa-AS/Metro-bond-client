import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/DashBoard/DashBoard/DashBoard';
import { ToastContainer } from 'react-toastify';

const DashBoardLayout = () => {
    return (
        <div>
            <ToastContainer />
            <DashBoard />
            <Outlet />
        </div>
    );
};

export default DashBoardLayout;
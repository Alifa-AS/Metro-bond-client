import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/DashBoard/DashBoard/DashBoard';
import { ToastContainer } from 'react-toastify';

const DashBoardLayout = () => {
    return (
        // <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className='dark:bg-[#1d232a]'>
            <ToastContainer />
            <DashBoard />
            <Outlet />
        </div>
    );
};

export default DashBoardLayout;
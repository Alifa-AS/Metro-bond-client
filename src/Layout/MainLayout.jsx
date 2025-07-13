import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomNavbar from '../Components/Shared/Navbar/CustomNavbar';
import CustomFooter from '../Components/Shared/Footer/CustomFooter';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const location = useLocation();
    // console.log(location);

    const noFoot = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div className="bg-white dark:bg-[#1d232a] text-gray-900 dark:text-white">
            <ToastContainer />
            <CustomNavbar />
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet />
            </div>
            {noFoot || <CustomFooter />}
        </div>
    );
};

export default MainLayout;
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomNavbar from '../Pages/Shared/Navbar/CustomNavbar';
import CustomFooter from '../Pages/Shared/Footer/CustomFooter';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const location = useLocation();
    console.log(location);

    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div>
            <ToastContainer />
            {noHeadFoot || <CustomNavbar />}
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet />
            </div>
            {noHeadFoot || <CustomFooter />}
        </div>
    );
};

export default MainLayout;
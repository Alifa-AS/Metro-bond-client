import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomNavbar from '../Pages/Shared/Navbar/CustomNavbar';
import CustomFooter from '../Pages/Shared/Footer/CustomFooter';

const MainLayout = () => {
    return (
        <div>
            <CustomNavbar />
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet />
            </div>
            <CustomFooter />
        </div>
    );
};

export default MainLayout;
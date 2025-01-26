import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomNavbar from '../Pages/Shared/Navbar/CustomNavbar';
import CustomFooter from '../Pages/Shared/Footer/CustomFooter';

const MainLayout = () => {
    const location = useLocation();
    console.log(location);

    const noHeadFoot = location.pathname.includes('login')


    return (
        <div>
            {noHeadFoot || <CustomNavbar />}
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet />
            </div>
            {noHeadFoot || <CustomFooter />}
        </div>
    );
};

export default MainLayout;
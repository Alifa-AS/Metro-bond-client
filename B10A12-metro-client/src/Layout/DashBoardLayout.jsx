import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/DashBoard/DashBoard/DashBoard';

const DashBoardLayout = () => {
    return (
        <div>
            <DashBoard />
            <Outlet />
        </div>
    );
};

export default DashBoardLayout;
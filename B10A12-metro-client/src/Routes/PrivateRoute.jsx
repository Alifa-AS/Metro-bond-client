import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading />
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace />
};

export default PrivateRoute;
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading/Loading';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(user){
        return children;
    }
    
    if(loading){
        return <Loading />
    }

    
    return <Navigate to='/login' state={{form: location}} replace />
};

export default PrivateRoute;
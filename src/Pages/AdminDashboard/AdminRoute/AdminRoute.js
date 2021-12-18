import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.products.user);
    const isAdmin = useSelector((state) => state.products.isAdmin)
    console.log(isAdmin);

    let location = useLocation();
    
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
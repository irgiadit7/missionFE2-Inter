import React from 'react';
import { Navigate } from 'react-router-dom';
import UnauthorizedPage from '../../Pages/UnauthorizedPage';

const AdminProtectedRoute = ({ children }) => {
    const userRole = localStorage.getItem('role');

    if (userRole !== 'admin') {
               return <UnauthorizedPage />;

    }

    return children;
};

export default AdminProtectedRoute;
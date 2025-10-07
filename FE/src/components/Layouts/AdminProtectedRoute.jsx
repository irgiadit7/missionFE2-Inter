import React from 'react';
import { Navigate } from 'react-router-dom';
import UnauthorizedPage from '../../Pages/UnauthorizedPage';

const AdminProtectedRoute = ({ children }) => {
    const userRole = localStorage.getItem('role');

    if (userRole !== 'admin') {
        // Jika bukan admin, tampilkan alert dan alihkan ke halaman utama
               return <UnauthorizedPage />;

    }

    // Jika admin, tampilkan halaman yang diminta
    return children;
};

export default AdminProtectedRoute;
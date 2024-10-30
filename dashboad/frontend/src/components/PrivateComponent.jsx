import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    console.log("Auth status:", auth); // Debugging log
    return auth ? <Outlet /> : <Navigate to="/signup" />;
}

export default PrivateComponent;

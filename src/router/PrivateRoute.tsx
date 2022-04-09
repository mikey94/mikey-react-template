import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

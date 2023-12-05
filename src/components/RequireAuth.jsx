import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireAuth = ({ isAuthOnly, isUnAuthOnly }) => {
   const location = useLocation();
   const { auth } = useAuth();

   if (isAuthOnly) {
      return (
         auth
         ?
         <Outlet />
         :
         <Navigate to='/login' state={{ from: location }}  replace />
      )
   }

   if (isUnAuthOnly) {
      return (
         !auth
         ?
         <Outlet />
         :
         <Navigate to='/' state={{ from: location }}  replace />
      )
   }
}

export default RequireAuth;
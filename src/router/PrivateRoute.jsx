import React, { useContext } from 'react';
import { Navigate, useLocation, useOutletContext } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
      return <span className="loading loading-bars loading-lg"></span>;
    }
    if (user) {
      return children;
    }
    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRoute;
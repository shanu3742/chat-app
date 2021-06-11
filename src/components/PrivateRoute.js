import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ProfileContext } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeprops }) => {
  const profile = useContext(ProfileContext);
  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PrivateRoute;

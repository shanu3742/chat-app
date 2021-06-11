import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeprops }) => {
  const profile = useProfile();
  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PrivateRoute;

import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeprops }) => {
  const profile = useProfile();
  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PublicRoute;

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ProfileContext } from '../context/profile.context';

const PublicRoute = ({ children, ...routeprops }) => {
  const profile = useContext(ProfileContext);
  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PublicRoute;

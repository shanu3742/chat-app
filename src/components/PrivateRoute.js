import React from 'react';
import { Redirect, Route } from 'react-router';
import { Loader, Container } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeprops }) => {
  const { profile, isLoading } = useProfile();
  if (isLoading && !profile) {
    return (
      <Container rows={8}>
        <Loader size="lg" speed="slow" backdrop content="loading..." vertical />
      </Container>
    );
  }
  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PrivateRoute;

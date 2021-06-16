import React from 'react';
import { Redirect, Route } from 'react-router';
import { Loader, Container } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeprops }) => {
  const { profile, isLoading } = useProfile();
  if (isLoading && !profile) {
    return (
      <Container rows={8}>
        <Loader size="md" speed="slow" content="loading..." vertical />
      </Container>
    );
  }
  if (profile && !isLoading) {
    return <Redirect to="/" />;
  }
  return <Route {...routeprops}>{children}</Route>;
};

export default PublicRoute;

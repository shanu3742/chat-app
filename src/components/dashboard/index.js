import React from 'react';
import { Drawer, Button, Icon } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const Profile = useProfile();

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey,{Profile.profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red">
          <Icon icon="sign-out" /> Signout
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;

import React from 'react';
import { Drawer, Button, Icon } from 'rsuite';

const Dashboard = () => {
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey</h3>
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

import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import Dashboard from '.';
import useModelState from '../../misc/custom-hooks';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModelState();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />
        Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

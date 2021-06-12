import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import Dashboard from '.';
import useModelState from '../../misc/custom-hooks';
import { useMediaQuery } from '../../misc/usemediaquery';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModelState();
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />
        Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

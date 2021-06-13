import React, { useCallback } from 'react';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import Dashboard from '.';
import useModelState from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';
import { useMediaQuery } from '../../misc/usemediaquery';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModelState();
  const isMobile = useMediaQuery('(max-width:992px)');
  const onSignOut = useCallback(() => {
    auth.signOut();
    Alert.info('Sign out', 4000);
    close();
  }, [close]);
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />
        Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

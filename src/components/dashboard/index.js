import React from 'react';
import { Drawer, Button, Icon, Divider } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from './EditableInput';

const Dashboard = ({ onSignOut }) => {
  // eslint-disable-next-line no-unused-vars
  const Profile = useProfile();
  const onSave = async newdata => {
    console.log(newdata);
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey,{Profile.profile.name}</h3>
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={Profile.profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          <Icon icon="sign-out" /> Signout
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;

import React from 'react';
import { Drawer, Button, Icon, Divider, Alert } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from './EditableInput';
import ProviderBlock from './ProviderBlock';
import AvatarUploadBtn from './AvatarUploadBtn';

const Dashboard = ({ onSignOut }) => {
  // eslint-disable-next-line no-unused-vars
  const Profile = useProfile();
  const onSave = async newdata => {
    const userNicknameRef = database
      .ref(`/profiles/${Profile.profile.uid}`)
      .child('name');
    try {
      await userNicknameRef.set(newdata);
      Alert.success('Nickname has been updated', 4000);
    } catch (err) {
      Alert.error('you did some mistakes', 4000);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey,{Profile.profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={Profile.profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <AvatarUploadBtn />
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

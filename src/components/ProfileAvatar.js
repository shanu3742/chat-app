import React from 'react';
import { Avatar } from 'rsuite';

import getName from '../misc/helper';

const ProfileAvatar = ({ name, ...src }) => {
  return (
    <Avatar size="lg" circle {...src} style={{ background: '#7B1FA2' }}>
      {getName(name)}
    </Avatar>
  );
};
export default ProfileAvatar;

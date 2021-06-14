import React from 'react';
import { Avatar } from 'rsuite';

import getName from '../misc/helper';

const ProfileAvatar = ({ name, ...avtarProps }) => {
  return (
    <Avatar circle {...avtarProps} style={{ background: '#7B1FA2' }}>
      {getName(name)}
    </Avatar>
  );
};
export default ProfileAvatar;

import React from 'react';
import { Nav } from 'rsuite';
import RoomItem from './RoomItem';

const ChatRoomList = () => {
  const math = 100 - 23.5;

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `${math}vh`,
      }}
    >
      <RoomItem />
    </Nav>
  );
};

export default ChatRoomList;

import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center">
        <h3 className="text-disappear">Room name</h3>
        <TimeAgo datetime={new Date()} />
      </div>
      ;
      <div className="d-flex">
        <span>No message yet...</span>
      </div>
    </div>
  );
};

export default RoomItem;
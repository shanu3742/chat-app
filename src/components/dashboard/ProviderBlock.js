import React, { useState } from 'react';
import { Tag, Icon, Button } from 'rsuite';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  // eslint-disable-next-line no-unused-vars
  const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });
  console.log(auth.currentUser);
  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable>
          <Icon icon="google" />
          Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable>
          <Icon icon="facebook" />
          Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button block color="green">
            <Icon icon="google" />
            Link to google
          </Button>
        )}
        {!isConnected['facebook.com'] && (
          <Button block color="blue">
            <Icon icon="facebook" />
            Link to facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;

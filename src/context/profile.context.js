import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;
export { ProfileContext };

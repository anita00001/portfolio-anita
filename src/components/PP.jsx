import React from 'react';
import profilePicture from '../assets/profile-picture.jpg';

const ProfilePicture = () => {
  return (
    <div className="relative flex items-center justify-center h-20 w-20 bg-gray-300 rounded-full overflow-hidden">
      <img src={profilePicture} alt="Profile" className="h-full w-full rounded-full object-cover" />
      <div className="absolute inset-0 border-2 border-color1 rounded-full"></div>
    </div>
  );
};

export default ProfilePicture;

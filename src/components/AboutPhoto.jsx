import React, { useState } from 'react';
import profilePicture from '../assets/profile-picture.jpg';

const AboutPhoto = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnimationEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
        setFadeOut(false);
    }, 1000);
  };

  return (
    <div className="mx-20 mt-20 w-1/2 flex justify-center items-center h-screen relative">
        <div className="absolute bg-blue-200 rounded-lg mx-20 w-80 h-80"></div>
        <img
            src={profilePicture}
            alt="Profile"
            className={`h-auto w-full rounded-lg relative ${fadeOut ? 'fade-out' : 'animate-slide-up'}`}
            onAnimationEnd={handleAnimationEnd}
        />
    </div>
  );
};

export default AboutPhoto;

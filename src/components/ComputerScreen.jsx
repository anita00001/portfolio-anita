import React from 'react';
import computerScreen from '../assets/computer-screen.png'

const ComputerScreen = () => {
  return (
    <div className="screen">
        <img src={computerScreen} alt="Profile" className="h-full w-full m-20" />
    </div>
  );
};

export default ComputerScreen;

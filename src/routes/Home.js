import React from 'react';
import SocialMedia from '../components/SocialMedia';
import Intro from '../components/Introduction';
import ComputerScreen from '../components/ComputerScreen';
import LineDivider from '../components/LineDivider';

const Home = () => {
  return (
    <>
      <div id="home" className="min-h-screen bg-color4 grid grid-cols-10 gap-4">
        <div className="col-span-1 px-10 flex items-center"><SocialMedia layout="columns" /></div>
        <div className="col-span-4 pt-20"><Intro /></div>
        <div className="col-span-4 pt-20"><ComputerScreen /></div>
      </div>
      < LineDivider />
    </>
  );
};

export default Home;
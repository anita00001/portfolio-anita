import React from 'react';
import AboutPhoto from '../components/AboutPhoto';
import AboutDescription from '../components/AboutDescription';
import LineDivider from '../components/LineDivider';

const About = () => {
  return (
    <>
      <div id="about" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="photo">< AboutPhoto /></div>
        <div classname="about-description">< AboutDescription /></div>
      </div>
      < LineDivider />
    </>
  );
};

export default About;
import React from 'react';
import AboutPhoto from '../components/AboutPhoto';
import AboutDescription from '../components/AboutDescription';
import LineDivider from '../components/LineDivider';
import Service from '../components/Service';
import Skill from '../components/Skill';

const About = () => {
  return (
    <>
      <div id="about" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="photo">< AboutPhoto /></div>
        <div classname="about-description">< AboutDescription /></div>
      </div>
      < LineDivider />
      <div id="service-skill" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="photo">< Service /></div>
        <div classname="about-description">< Skill /></div>
      </div>
    </>
  );
};

export default About;
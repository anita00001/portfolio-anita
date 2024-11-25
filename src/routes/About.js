import React from 'react';
import AboutPhoto from '../components/AboutPhoto';
import AboutDescription from '../components/AboutDescription';
import LineDivider from '../components/LineDivider';
import Service from '../components/Service';
import Skill from '../components/Skill';
import Experience from '../components/Experience';
import Education from '../components/Education';

const About = () => {
  return (
    <>
    <div id="about">
      <div id="about-me" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="photo">< AboutPhoto /></div>
        <div classname="about-description">< AboutDescription /></div>
      </div>
      {/* < LineDivider /> */}
      <div id="service-skill" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="about-service">< Service /></div>
        <div classname="about-skill">< Skill /></div>
      </div>
      {/* < LineDivider /> */}
      <div id="experience-education" className="min-h-screen bg-color4 grid grid-cols-2 gap-4 px-20">
        <div className="about-experience">< Experience /></div>
        <div classname="about-education">< Education /></div>
      </div>
      < LineDivider />
      </div>
    </>
  );
};

export default About;
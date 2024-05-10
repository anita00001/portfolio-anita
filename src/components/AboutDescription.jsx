import React from 'react';
import { RiDownload2Line } from 'react-icons/ri';

const AboutDescription = () => {
  return (
    <>
      <div className="about-description py-20">
        <h1 className="about text-4xl font-bold py-10 font-crete text-gradient">
          About Me
        </h1>
        <p className="text-xl py-4 text-justify">
          I'm a seasoned Full Stack Web Developer proficient in JavaScript, React, Redux, Ruby, and Ruby on Rails.
          
          With a strong grasp of design principles, UX optimization, and responsive web development, I manifest dynamic user interfaces and robust server-side applications. I thrive on challenges, delivering top-tier solutions that surpass client expectations.
        </p>
        <button className="text-xl mt-4 p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white">
            Get My Resume
            <RiDownload2Line className="ml-2 text-2xl" />
        </button>
      </div>
    </>
  );
};

export default AboutDescription;

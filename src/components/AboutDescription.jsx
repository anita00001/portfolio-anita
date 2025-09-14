import React from 'react';
import { RiDownload2Line } from 'react-icons/ri';
import resumePdf from '../assets/Anita_Sharma_Resume.pdf';

const AboutDescription = () => {
  return (
    <>
      <div className="about-description py-20">
        <h1 className="about text-4xl font-bold py-10 font-crete text-gradient">
          About Me
        </h1>
        <div className="text-xl pr-10 text-justify overflow-y-auto scrollable"
          style={{ maxHeight: '250px' }} // Fixed height with scroll
        >
          <p className="text-xl py-4 text-justify">
            I’m a seasoned Full Stack Web Developer specializing in JavaScript, Bootstrap, React, Redux, Tailwind CSS, Ruby, and Ruby on Rails.
          </p>
          <p className="text-xl py-1 text-justify">
            With a strong foundation in modern design principles, UX optimization, and responsive development, I build applications that are not only scalable and maintainable but also engaging and intuitive for users. I thrive on solving complex problems and transforming ideas into elegant, high-performing solutions. Whether it’s crafting seamless user interfaces or architecting robust server-side systems, I focus on delivering work that exceeds expectations.
          </p>
          <p className="text-xl py-1 mb-2 text-justify">
            Beyond coding, I’m a passionate chess player and painting enthusiast — constantly exploring new perspectives that inspire creativity in my development process. I’m driven by the fusion of design, code, and human experience, and I’m excited to collaborate on projects that make a real impact.
          </p>
        </div>
        <a href={resumePdf} download className="text-xl mt-8 p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white w-max">
          Get My Resume
          <RiDownload2Line className="ml-2 text-2xl" />
        </a>
      </div>
    </>
  );
};

export default AboutDescription;

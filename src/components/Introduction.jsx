import { useState, useEffect } from 'react';
import ProfilePicture from './PP';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, 1500); // Repeat after 1 seconds
      }
    }, 300); // Interval between each character display

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  return <>{displayText}</>;
};

const Intro = () => {
  return (
    <>
      <ProfilePicture />
      <div className="intro">
        <h1 id="storytelling" className="text-4xl font-bold py-5 relative gradient-text font-pacifico">
          Pixels that tell stories 🛫
        </h1>
        <h2 className="text-3xl font-lobster py-4 px-10">
          Hey
          <span className="wave-emoji"></span>
          I'm{' '}
          <Typewriter text="Anita Sharma" />
        </h2>
        <p className="text-xl pt-4 text-justify">
          I'm a seasoned Full Stack Web Developer proficient in JavaScript, React, Redux, Ruby, and Ruby on Rails.
          
          With a strong grasp of design principles, UX optimization, and responsive web development, I manifest dynamic user interfaces and robust server-side applications. I thrive on challenges, delivering top-tier solutions that surpass client expectations.
        </p>
        {/* <p className="text-xl pt-10 text-justify text-center border-red">
          Let's collaborate and bring your imaginations to life in the digital realm!
        </p> */}
      </div>
    </>
  );
};

export default Intro;

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
          I’m a developer specializing in{" "}
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">Bootstrap</span>,{" "}
          <span className="font-bold">Tailwind CSS</span>,{" "}
          <span className="font-bold">React</span>,{" "}
          <span className="font-bold">Redux</span>,{" "}
          <span className="font-bold">JEST</span>,{" "}
          <span className="font-bold">Ruby</span>, and{" "}
          <span className="font-bold">Ruby on Rails</span>, building scalable,
          maintainable, and high-performing applications. My passion lies in creating
          user-friendly experiences that blend aesthetics with functionality.
        </p>
        
      </div>
    </>
  );
};

export default Intro;

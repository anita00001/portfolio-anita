import React, { useState } from 'react';
import featuredImage from '../assets/featured-project.jpg'; // Replace with your image path
import featuredVideo from '../assets/projects/fall-back-video.mp4'; // Replace with your video path

const FeaturedProject = () => {
  const [view, setView] = useState('photo'); // 'photo' or 'video'

  return (
    <div className="min-h-screen bg-color4 px-20 py-20">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold font-crete text-gradient pt-10 mb-10">Highlight</h1>
      </div>
    <div className="grid grid-cols-2 gap-10">
      {/* Left Side: Photo/Video */}
      <div className="relative  m-20 w-80 h-80">
        <div className="bg-blue-200 rounded-lg p-4 shadow-lg">
          {view === 'photo' ? (
            <img
              src={featuredImage}
              alt="Featured Project"
              className="rounded-lg w-80 h-80 object-cover"
            />
          ) : (
            <video
              src={featuredVideo}
              controls
              className="rounded-lg w-80 h-80 object-cover"
            />
          )}
        </div>
        <div className="flex justify-center mt-4">
          {view === 'photo' ? (
            <button
              onClick={() => setView('video')}
              className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
            >
              Watch Video
            </button>
          ) : (
            <button
              onClick={() => setView('photo')}
              className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
            >
              See Photo
            </button>
          )}
        </div>
      </div>

      {/* Right Side: Project Details */}
      <div className="flex flex-col justify-start mt-10">
        <h1 className="project-title font-crete text-2xl pb-4">E-commerce platform</h1>
        <div
          className="text-xl py-10 pr-10 text-justify mb-6 overflow-y-auto scrollable"
          style={{ maxHeight: '250px' }} // Fixed height with scroll
        >
          <p>
            This project is an e-commerce platform designed to provide seamless shopping
            experiences for users. It integrates front-end, back-end, and database technologies.
          </p>
          <p>
            The platform features a fully responsive design, real-time inventory management, and
            secure payment gateways to ensure a top-notch user experience.
          </p>
          <p>
            The platform features a fully responsive design, real-time inventory management, and
            secure payment gateways to ensure a top-notch user experience.
          </p>
        </div>
        <div className="my-6">
          <div className="flex flex-wrap gap-2">
            {['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-color1 text-white rounded-lg shadow-md hover:bg-color6"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
          >
            See Project
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
          >
            See Live
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturedProject;

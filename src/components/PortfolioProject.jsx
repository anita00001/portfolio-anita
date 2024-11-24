import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/Projects/projectSlice';

const PortfolioProject = ({ featured }) => {
  const { projects, filter } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  // Featured project details
  const featuredProject = projects.find((project) => project.id === 1); // Adjust ID as needed

  if (featured) {
    return (
      <div className="about-description py-20">
        <h1 className="about text-4xl font-bold py-10 font-crete text-gradient">
          Featured Project
        </h1>
        <p className="text-xl py-4 text-justify text-color3">
          {featuredProject.description}
        </p>
        <button className="text-xl mt-4 p-4 text-justify border border-color2 flex items-center bg-color1 hover:bg-color6 hover:border-color1 text-white">
          View Project
        </button>
      </div>
    );
  }

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Front-end', 'Back-end', 'Full Stack'].map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setFilter(category))}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === category
                ? 'bg-color1 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-color2 text-white px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color1 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color1 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProject;

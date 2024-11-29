import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, toggleFullStack, toggleAllProjects } from '../redux/Projects/projectSlice';

const PortfolioProject = () => {
    const { projects, filter, showAllFullStack, showAllProjects } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    // Initialize projectViews state with all projects set to 'photo'
    const [projectViews, setProjectViews] = useState(() =>
        projects.reduce((acc, project) => {
            acc[project.id] = 'photo';
            return acc;
        }, {})
    );

    // Sorting logic for all projects
    const sortedProjects = [
        ...projects.filter((project) => project.type === 'Full Stack'),
        ...projects.filter((project) => project.type === 'Front-end'),
        ...projects.filter((project) => project.type === 'Back-end'),
    ];

    // Logic for determining displayed projects
    const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);
    const fullStackProjects = projects.filter((project) => project.type === 'Full Stack');
    const displayedProjects = showAllProjects
        ? sortedProjects // Display sorted projects when "See All Projects" is clicked
        : showAllFullStack
        ? fullStackProjects
        : fullStackProjects.slice(0, 3);

    // Handle view toggle for individual project
    const handleViewToggle = (projectId) => {
        setProjectViews((prev) => ({
            ...prev,
            [projectId]: prev[projectId] === 'photo' ? 'video' : 'photo',
        }));
    };

    return (
        <div className="min-h-screen bg-color4 pl-20 pb-20">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold font-crete text-gradient mb-10">Projects</h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-10 mb-8">
                {['Front-end', 'Back-end', 'Full Stack'].map((category) => (
                    <button
                        key={category}
                        onClick={() => dispatch(setFilter(category))}
                        className={`px-4 py-2 mx-10 mb-10 bg-color1 text-white rounded-lg shadow-md hover:bg-color6 ${
                            filter === category ? 'border-2 border-color6' : ''
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-10">
                {displayedProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 ${
                            index % 2 === 0 ? '' : 'md:grid-cols-2-reverse'
                        }`}
                    >
                        {/* Media Column */}
                        <div className="relative mt-20 w-80 h-80">
                            <div className="bg-blue-200 rounded-lg p-4 shadow-lg">
                                {projectViews[project.id] === 'photo' ? (
                                    <img
                                        src={project.mediaPhoto}
                                        alt={project.title}
                                        className="rounded-lg w-80 h-80 object-cover"
                                    />
                                ) : (
                                    <video
                                        src={project.mediaVideo}
                                        controls
                                        className="rounded-lg w-80 h-80 object-cover"
                                    />
                                )}
                            </div>
                            <div className="flex justify-center mt-4">
                                {projectViews[project.id] === 'photo' ? (
                                    <button
                                        onClick={() => handleViewToggle(project.id)}
                                        className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
                                    >
                                        Watch Video
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleViewToggle(project.id)}
                                        className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
                                    >
                                        See Photo
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="flex flex-col justify-start mt-4 mb-10">
                            <h3 className="project-title font-crete text-2xl pb-4 mb-6">{project.title}</h3>
                            <div
                                className="border border-color1 text-xl mb-5 pr-10 text-justify overflow-y-auto scrollable"
                                style={{ minHeight: '250px', maxHeight: '250px' }}
                            >
                                <p>{project.description}</p>
                            </div>
                            <div className="my-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, index) => (
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
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons for Viewing More */}
            {!showAllProjects && (
                <div className="text-center mt-8">
                    {!showAllFullStack && fullStackProjects.length > 3 && (
                        <button
                            onClick={() => dispatch(toggleFullStack())}
                            className="px-4 py-2 bg-color1 text-white rounded-lg"
                        >
                            See More Projects
                        </button>
                    )}
                    {showAllFullStack && (
                        <button
                            onClick={() => dispatch(toggleAllProjects())}
                            className="px-4 py-2 bg-color1 text-white rounded-lg"
                        >
                            See All Projects
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default PortfolioProject;

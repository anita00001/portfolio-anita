import React from 'react';

const ProjectCard = ({ project, view, onToggleView, isReversed }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 ${isReversed ? 'md:grid-cols-2-reverse' : ''}`}>
            <div className="relative mt-20 w-80 h-80">
                <div className="bg-blue-200 rounded-lg p-4 shadow-lg">
                    {view === 'photo' ? (
                        <img src={project.mediaPhoto} alt={project.title} className="rounded-lg w-80 h-80 object-contain" />
                    ) : (
                        <video src={project.mediaVideo} controls className="rounded-lg w-80 h-80 object-contain" />
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => onToggleView(project.id)}
                        className="text-xl px-4 py-2 rounded-lg shadow-md border border-color2 bg-color1 hover:bg-color6 hover:border-color1 text-white"
                    >
                        {view === 'photo' ? 'Watch Video' : 'See Photo'}
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-start mt-4 mb-10">
                <h3 className="project-title font-crete text-2xl pb-4 mb-6">{project.title}</h3>
                <div
                    className="border border-color1 text-xl mb-5 pr-10 text-justify overflow-y-auto scrollable"
                    style={{ minHeight: '250px', maxHeight: '250px' }}
                >
                    <p style={{ whiteSpace: "pre-line" }}>
                        {project.description}
                    </p>
                </div>
                <div className="my-6">
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-color1 text-white rounded-lg shadow-md hover:bg-color6">
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
    );
};

export default ProjectCard;

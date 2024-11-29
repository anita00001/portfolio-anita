import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, projectViews, onToggleView }) => {
    return (
        <div className="grid gap-10">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    view={projectViews[project.id]}
                    onToggleView={onToggleView}
                    isReversed={index % 2 !== 0}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;

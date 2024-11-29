import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import ViewMoreButton from './ViewMoreButton';

const PortfolioProject = () => {
    const { projects, filter, showAllFullStack, showAllProjects } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    const [projectViews, setProjectViews] = useState(() =>
        projects.reduce((acc, project) => {
            acc[project.id] = 'photo';
            return acc;
        }, {})
    );

    const sortedProjects = [
        ...projects.filter((project) => project.type === 'Full Stack'),
        ...projects.filter((project) => project.type === 'Front-end'),
        ...projects.filter((project) => project.type === 'Back-end'),
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);
    const fullStackProjects = projects.filter((project) => project.type === 'Full Stack');
    const displayedProjects = showAllProjects
        ? sortedProjects
        : filter === 'All'
        ? showAllFullStack
            ? fullStackProjects
            : fullStackProjects.slice(0, 3)
        : showAllFullStack
        ? filteredProjects
        : filteredProjects.slice(0, 3);

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
            <ProjectFilter filter={filter} dispatch={dispatch} />
            <ProjectGrid projects={displayedProjects} projectViews={projectViews} onToggleView={handleViewToggle} />
            <ViewMoreButton
                showAllProjects={showAllProjects}
                showAllFullStack={showAllFullStack}
                fullStackProjects={fullStackProjects}
                dispatch={dispatch}
            />
        </div>
    );
};

export default PortfolioProject;

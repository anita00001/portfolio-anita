import React from 'react';
import { toggleFullStack, toggleAllProjects } from '../redux/Projects/projectSlice';

const ViewMoreButton = ({ showAllProjects, showAllFullStack, fullStackProjects, dispatch, onScrollToTop }) => {
    const handleSeeAllProjects = () => {
        dispatch(toggleAllProjects());
        onScrollToTop(); // Scroll to the top of the project section
    };

    return (
        <div className="text-center mt-8">
            {!showAllProjects && fullStackProjects.length > 3 && !showAllFullStack && (
                <button
                    onClick={() => dispatch(toggleFullStack())}
                    className="px-4 py-2 bg-color1 text-white rounded-lg"
                >
                    See More Projects
                </button>
            )}
            {showAllFullStack && (
                <button
                    onClick={handleSeeAllProjects}
                    className="px-4 py-2 bg-color1 text-white rounded-lg"
                >
                    See All Projects
                </button>
            )}
        </div>
    );
};

export default ViewMoreButton;

import React from 'react';
import { toggleFullStack, toggleAllProjects } from '../redux/Projects/projectSlice';

const ViewMoreButton = ({ showAllProjects, showAllFullStack, fullStackProjects, dispatch }) => {
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
                    onClick={() => dispatch(toggleAllProjects())}
                    className="px-4 py-2 bg-color1 text-white rounded-lg"
                >
                    See All Projects
                </button>
            )}
        </div>
    );
};

export default ViewMoreButton;

import React from 'react';
import { setFilter } from '../redux/Projects/projectSlice';

const ProjectFilter = ({ filter, dispatch }) => {
    return (
        <div className="flex justify-center gap-10 mb-8">
            {['Front-end', 'Back-end', 'Full Stack'].map((category) => (
                <button
                    key={category}
                    onClick={() => dispatch(setFilter(category))}
                    className={`px-4 py-2 mx-10 mb-10 bg-color1 text-white rounded-lg shadow-md ${
                        filter === category ? 'font-bold' : ''
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProjectFilter;

import { createSlice } from '@reduxjs/toolkit';
import featuredImage from '../../assets/featured-project.jpg'; // Replace with your image path
import featuredVideo from '../../assets/featured-project.mp4';


const initialState = {
    projects: [
        { id: 1, title: 'Portfolio Website 1', description: 'A personal portfolio website.', stack: ['HTML/CSS'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 2, title: 'Blog API 1', description: 'RESTful API for a blog application.', stack: ['Ruby', 'PostgreSQL'], type: 'Back-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 3, title: 'E-commerce Platform 1', description: 'A full-stack e-commerce app.', stack: ['React/Redux', 'Ruby on Rails'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 4, title: 'Task Manager 1', description: 'A task management tool.', stack: ['React', 'Node.js'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 5, title: 'Weather App 1', description: 'A weather forecast app.', stack: ['React'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 6, title: 'Portfolio Website 2', description: 'A personal portfolio website.', stack: ['HTML/CSS'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 7, title: 'Blog API 2', description: 'RESTful API for a blog application.', stack: ['Ruby', 'PostgreSQL'], type: 'Back-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 8, title: 'E-commerce Platform 2', description: 'A full-stack e-commerce app.', stack: ['React/Redux', 'Ruby on Rails'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 9, title: 'Task Manager 2', description: 'A task management tool.', stack: ['React', 'Node.js'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 10, title: 'Weather App 2', description: 'A weather forecast app.', stack: ['React'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 11, title: 'Portfolio Website 3', description: 'A personal portfolio website.', stack: ['HTML/CSS'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 12, title: 'Blog API 3', description: 'RESTful API for a blog application.', stack: ['Ruby', 'PostgreSQL'], type: 'Back-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 13, title: 'E-commerce Platform 3', description: 'A full-stack e-commerce app.', stack: ['React/Redux', 'Ruby on Rails'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 14, title: 'Task Manager 3', description: 'A task management tool.', stack: ['React', 'Node.js'], type: 'Full Stack', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
        { id: 15, title: 'Weather App 3', description: 'A weather forecast app.', stack: ['React'], type: 'Front-end', github: '#', demo: '#', mediaPhoto: featuredImage, mediaVideo: featuredVideo },
    ],
    filter: 'Full Stack',
    showAllFullStack: false,
    showAllProjects: false,
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.showAllFullStack = false;
            state.showAllProjects = false;
        },
        toggleFullStack: (state) => {
            state.showAllFullStack = !state.showAllFullStack;
        },
        toggleAllProjects: (state) => {
            state.showAllProjects = true;
        },
    },
});

export const { setFilter, toggleFullStack, toggleAllProjects } = projectSlice.actions;
export default projectSlice.reducer;

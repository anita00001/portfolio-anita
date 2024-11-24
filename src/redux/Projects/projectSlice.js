import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [
      { id: 1, title: 'Portfolio Website', description: 'A personal portfolio website.', stack: ['HTML/CSS'], type: 'Front-end', github: '#', demo: '#' },
      { id: 2, title: 'Blog API', description: 'RESTful API for a blog application.', stack: ['Ruby', 'PostgreSQL'], type: 'Back-end', github: '#', demo: '#' },
      { id: 3, title: 'E-commerce Platform', description: 'A full-stack e-commerce app.', stack: ['React/Redux', 'Ruby on Rails'], type: 'Full Stack', github: '#', demo: '#' },
    ],
    filter: 'All',
  };

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = projectSlice.actions;
export default projectSlice.reducer;
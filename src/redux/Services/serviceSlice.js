import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        service: [
            { id: 1, name: 'Full Stack Development', description: 'Full Stack Development with React and Rails' },
            { id: 2, name: 'Backend Development', description: 'Backend Development with Ruby and Ruby on Rails' },
            { id: 3, name: 'Frontend Development', description: 'Frontend Development with React/Redux, Javascript, Bootstrap, TailwindCSS, HTML and CSS3' },
            { id: 4, name: 'SEO Optimization', description: 'Search Engine Optimization of the website' },
            { id: 5, name: 'Software Testing', description: 'Code Testing with JEST' },
            { id: 6, name: 'Database Management', description: 'Postgres SQL' },
        ],
    },
    reducers: {},
});

export default serviceSlice.reducer;
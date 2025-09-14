import { createSlice } from "@reduxjs/toolkit";

const technicalSkillSlice = createSlice({
    name: "technicalSkill",
    initialState: {
        technicalSkill: [
            { id: 1, name: 'Ruby on Rails', icon: 'SiRubyonrails' },
            { id: 2, name: 'Ruby', icon: 'SiRuby' },
            { id: 3, name: 'React/Redux', icon: 'SiReact' },
            { id: 4, name: 'Javascript', icon: 'SiJavascript' },
            { id: 5, name: 'JEST', icon: 'SiJest' },
            { id: 6, name: 'Postgres SQL', icon: 'SiPostgresql' },
        ],
    },
    reducers: {},
});

export default technicalSkillSlice.reducer;
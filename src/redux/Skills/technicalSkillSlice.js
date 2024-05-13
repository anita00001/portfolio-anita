import { createSlice } from "@reduxjs/toolkit";

const technicalSkillSlice = createSlice({
    name: "technicalSkill",
    initialState: {
        technicalSkill: [
            { id: 1, name: 'Ruby on Rails'},
            { id: 2, name: 'Ruby'},
            { id: 3, name: 'React/Redux'},
            { id: 4, name: 'Javascript'},
            { id: 5, name: 'JEST'},
            { id: 6, name: 'Postgres SQL'},
        ],
    },
    reducers: {},
});

export default technicalSkillSlice.reducer;
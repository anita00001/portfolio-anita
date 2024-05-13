import { createSlice } from "@reduxjs/toolkit";

const softSkillSlice = createSlice({
    name: "softSkill",
    initialState: {
        softSkill: [
            { id: 1, name: 'Leadership'},
            { id: 2, name: 'Team Player'},
            { id: 3, name: 'Mentor'},
            { id: 4, name: 'Fluent English'},
            { id: 5, name: 'Remote Work'},
        ],
    },
    reducers: {},
});

export default softSkillSlice.reducer;
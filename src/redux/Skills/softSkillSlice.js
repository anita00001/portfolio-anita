import { createSlice } from "@reduxjs/toolkit";

const softSkillSlice = createSlice({
    name: "softSkill",
    initialState: {
        softSkill: [
            { id: 1, name: 'Leadership',      icon: 'FaUserTie' },
            { id: 2, name: 'Team Player',     icon: 'FaUsers' },
            { id: 3, name: 'Mentor',          icon: 'FaChalkboardTeacher' },
            { id: 4, name: 'Fluent English',  icon: 'FaLanguage' },
            { id: 5, name: 'Remote Work',     icon: 'MdLaptopMac' },
        ],
    },
    reducers: {},
});

export default softSkillSlice.reducer;
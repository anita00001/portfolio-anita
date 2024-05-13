import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: {
        experience: [
            { id: 1, name: 'IT Officer', role: 'Lead IT department', organization: 'Nepal Government' },
            { id: 2, name: 'Assistant Lecturer', role: 'Mentor Students', organization: 'Janabhawana Campus' },
            { id: 3, name: 'Mentor', role: 'Mentor junior fellow', organization: 'Microverse' },
            { id: 4, name: 'Code Reviewer', role: 'Review codes written on Javascript and React, h;avdioghrohfeovnaiorehoavndk, hqgoihreqoifdalskfqog, ieghoiqregoajef', organization: 'Microverse' },
        ],
    },
    reducers: {},
});

export default experienceSlice.reducer;
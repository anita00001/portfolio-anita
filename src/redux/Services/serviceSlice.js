import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        service: [
            { id: 1, name: 'Service 1', description: 'Description for Service 1' },
            { id: 2, name: 'Service 2', description: 'Description for Service 2' },
        ],
    },
    reducers: {},
});

export default serviceSlice.reducer;
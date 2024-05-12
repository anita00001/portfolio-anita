import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        service: [],
    },
    reducers: {},
});

export default serviceSlice.reducer;
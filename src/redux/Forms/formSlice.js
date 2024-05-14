import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        submittedData: null,
    },
    reducers: {
        submitFormData: (state, action) => {
            state.submittedData = action.payload;
        },
    },
});

export const { submitFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;

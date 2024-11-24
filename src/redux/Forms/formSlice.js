import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        submittedData: [],
    },
    reducers: {
        submitFormData: (state, action) => {
            return {
                submittedData: [...state.submittedData, action.payload],
            };
        },
    },
});

export const { submitFormData } = formSlice.actions;
export default formSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const formSlice = createSlice({
//     name: "form",
//     initialState: {
//         submittedData: [],
//     },
//     reducers: {
//         submitFormData: (state, action) => {
//             // state.submittedData = action.payload;
//             return {
//                 // ...state,
//                 submittedData: [...state.submittedData, action.payload],
//             };
//         },
//     },
// });

// export const { submitFormData } = formSlice.actions;
// export default formSlice.reducer;

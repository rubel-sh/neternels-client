import { createSlice } from "@reduxjs/toolkit";

const changeTitleSlice = createSlice({
    name: "changeTitle",
    initialState: {
        value: "Kernel Developers.",
    },
    reducers: {
        setTitle: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTitle } = changeTitleSlice.actions;
export default changeTitleSlice.reducer;

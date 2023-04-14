import { configureStore } from "@reduxjs/toolkit";
import changeTitleReducer from "@/redux/features/changeTitle/changeTitleSlice";
const store = configureStore({
    // reducer without s
    reducer: {
        changeTitle: changeTitleReducer,

        // add as many reducers you want.
    },
});

export default store;

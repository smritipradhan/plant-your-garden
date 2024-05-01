import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    jobFilter: "jobFilterReducer",
  },
});

export default store;

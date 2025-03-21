import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-Slice/SattingSlice";
import taskReducer from "../state-Slice/TaskSlice";
import summaryReducer from "../state-Slice/SummerySlice";

export const store = configureStore({
  // ✅ Ensure store is exported
  reducer: {
    settings: settingsReducer,
    tasks: taskReducer,
    summaryReducer: summaryReducer,
  },
});

export default store;

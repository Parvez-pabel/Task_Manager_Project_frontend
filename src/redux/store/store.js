import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../state-Slice/SattingSlice";
import taskReducer from "../state-Slice/TaskSlice";
import summaryReducer from "../state-Slice/SummerySlice";
import allTaskReducer from "../state-Slice/AllTask";

export default configureStore({
  reducer: {
    // Define your reducers here
    settings: settingsReducer,
    tasks: taskReducer,
    summaryReducer: summaryReducer,
    allTaskReducer: allTaskReducer,
  },
  // Other store settings...
});

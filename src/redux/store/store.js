import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../state-Slice/SattingSlice";
import taskReducer from "../state-Slice/TaskSlice";

export default configureStore({
  reducer: {
    // Define your reducers here
    settings: settingsReducer,
    task: taskReducer,
  },
  // Other store settings...
});

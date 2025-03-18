import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../state-Slice/SattingSlice";

export default configureStore({
  reducer: {
    // Define your reducers here
    settings: settingsReducer,
  },
  // Other store settings...
});

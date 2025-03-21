import { createSlice } from "@reduxjs/toolkit";

export const AllTaskSlice = createSlice({
  name: "allTask",
  initialState: {
    tasks: [],
  },
  reducers: {
    setSummary: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setSummary } = AllTaskSlice.actions;

export default AllTaskSlice.reducer;

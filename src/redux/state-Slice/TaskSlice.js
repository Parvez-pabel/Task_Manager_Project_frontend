import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    New: [],
    InProgress: [],
    Completed: [],
    Canceled: [],
  },
  reducers: {
    SetNewTask: (state, action) => {
      state.New = action.payload;
    },
    SetCompletedTask: (state, action) => {
      state.Completed = action.payload;
    },
    SetProgressTask: (state, action) => {
      state.InProgress = action.payload;
    },
    SetCanceledTask: (state, action) => {
      state.Canceled = action.payload;
    }
  },
});

export const {
  SetNewTask,
  SetCompletedTask,
  SetProgressTask,
  SetCanceledTask,
  SetTasks,
} = taskSlice.actions;

export default taskSlice.reducer;

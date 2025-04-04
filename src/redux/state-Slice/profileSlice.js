import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    value: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;

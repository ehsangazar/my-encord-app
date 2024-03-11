import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    media: [],
  },
  reducers: {
    addMedia: (state, action) => {
      state.media.push(action.payload);
    },
  },
});

export const { addMedia } = mediaSlice.actions;

export default mediaSlice.reducer;

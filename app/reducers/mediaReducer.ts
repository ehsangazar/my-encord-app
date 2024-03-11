import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    items: [],
    selectedItemId: null,
  },
  reducers: {
    addMedia: (state, action) => {
      state.items.push({
        id: state.items.length + 1,
        ...action.payload,
      });
    },
    selectMedia: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
});

export const { addMedia, selectMedia } = mediaSlice.actions;

export default mediaSlice.reducer;

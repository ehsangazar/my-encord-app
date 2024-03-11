import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    items: [
      {
        id: 1,
        filename: "test.jpg",
        size: 123456,
        createdAt: new Date().toISOString(),
      },
    ],
    selectedItemId: null,
  },
  reducers: {
    addMedia: (state, action) => {
      state.items.push({
        id: (state.items.length + 1).toString(),
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

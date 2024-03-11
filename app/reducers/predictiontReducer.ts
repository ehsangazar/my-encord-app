import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchHandler from "~/utils/fetchHandler";

export const fetchPredict = createAsyncThunk(
  "prediction/fetchPredict",
  async (data: { mediaId: number; model: string; threshold: number }) => {
    const response = await fetchHandler("/predict", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return {
      response: response,
      media: data,
    };
  }
);

const predictionSlice = createSlice({
  name: "prediction",
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPredict.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchPredict.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchPredict.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload.response) {
        state.error = "No response";
        return;
      }
      state.items.push({
        media: action.payload.media,
        response: action.payload.response,
      });
    });
  },
});

export default predictionSlice.reducer;

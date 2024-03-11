import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchHandler from "~/utils/fetchHandler";

export const fetchPredict = createAsyncThunk(
  "prediction/fetchPredict",
  async (data: { mediaId: number; title: string; description: string }) => {
    const response = await fetchHandler("/predict", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return {
      mediaId: data.mediaId,
      response: response?.predict,
      modal: {
        timestamp: new Date().toISOString(),
        title: data.title,
        description: data.description,
      },
    };
  }
);

const predictionSlice = createSlice({
  name: "prediction",
  initialState: {
    loading: false,
    error: null,
    items: [],
    selectedItemId: null,
  },
  reducers: {
    selectPrediction: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
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
        predctionId: state.items.length + 1,
        mediaId: action.payload.mediaId,
        modal: action.payload.modal,
        response: action.payload.response,
      });
    });
  },
});

export const { selectPrediction } = predictionSlice.actions;

export default predictionSlice.reducer;

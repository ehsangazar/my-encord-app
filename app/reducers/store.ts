import { configureStore } from "@reduxjs/toolkit";

import mediaReducer from "./mediaReducer";
import predictiontReducer from "./predictiontReducer";

export const store = configureStore({
  reducer: {
    media: mediaReducer,
    prediction: predictiontReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

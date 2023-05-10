// Import the configureStore function from the reduxjs/toolkit library
import { configureStore } from "@reduxjs/toolkit";

// Import the playerReducer from the features/playerSlice file
import playerReducer from "./features/playerSlice";

// Create a store using the configureStore function and pass in the playerReducer as the reducer
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
  // Get the default middleware for the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
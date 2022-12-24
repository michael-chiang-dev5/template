import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.js';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

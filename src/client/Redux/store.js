import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionReducer,
  },
});

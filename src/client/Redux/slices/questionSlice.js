import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = questionSlice.actions;

export default questionSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sub: null,
  picture: null,
  email: null,
  email_verified: null,
  _id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionSetField: (state, action) => {
      const { field, value } = action.payload;
      if (Object.keys(state).includes(field) === false) return; // validate field: don't do anything if invalid field
      state[field] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionSetField } = userSlice.actions;

export default userSlice.reducer;

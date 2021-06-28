import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'details',
  initialState: [],
  reducers: {
    deleteCard(state, action) {
      const result = state.findIndex((obj) => obj.id === action.payload);
      state.splice(result, 1);
    },
    addCard(state, action) {
      state.push(action.payload);
    },
  },
});

export const { deleteCard, addCard } = appSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './appSlice'

export function createStore() {
  const store = configureStore({
    reducer: {
      details: appSlice.reducer,
    },
  });
  return store;
}

export const store = createStore()

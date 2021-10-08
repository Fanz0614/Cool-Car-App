import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from './appslice';

const rootReducer = combineReducers({
  details: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

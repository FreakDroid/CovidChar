import { configureStore } from '@reduxjs/toolkit';
import covidSlice from '../Slices/CovidSlice';
import covidStateSlice  from '../Slices/CovidStateSlice';

export const store = configureStore({
  reducer: {
    covid: covidSlice,
    covidState: covidStateSlice
  },
});

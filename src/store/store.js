import { configureStore } from '@reduxjs/toolkit';
import airportCodeSlice from '../features/airport/airportCodeSlice';
import footprintSlice from '../features/footprint/footprintSlice';

export const store = configureStore({
  reducer: {
    airportCode: airportCodeSlice,
    footprint: footprintSlice
  }
});

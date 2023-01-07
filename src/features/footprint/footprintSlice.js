import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  queryCodeFrom: '',
  queryCodeTo: '',
  footprint: null,
  passenger: 1,
  flightClass: 'economy'
};

export const getFootprint = createAsyncThunk(
  'airportCode/getFootprint',

  async (options, thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const footprintSlice = createSlice({
  name: 'footprint',
  initialState,
  reducers: {
    handleChangeCodeFrom: (state, { payload }) => {
      state.queryCodeFrom = payload;
    },
    handleChangeCodeTo: (state, { payload }) => {
      state.queryCodeTo = payload;
    },
    getNumberOfPassenger: (state, { payload }) => {
      state.passenger = payload;
    },
    handleFlightClass: (state, { payload }) => {
      state.flightClass = payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getFootprint.fulfilled, (state, action) => {
      state.footprint = action.payload;
    });
  }
});

export default footprintSlice.reducer;

export const {
  handleChangeCodeFrom,
  handleChangeCodeTo,
  getNumberOfPassenger,
  handleFlightClass
} = footprintSlice.actions;

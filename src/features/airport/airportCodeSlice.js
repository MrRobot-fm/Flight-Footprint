import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  query: 'FCO',
  data: null,
  code: []
};

export const getAirportCode = createAsyncThunk(
  'airportCode/getAirportCode',
  async (query, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&term=${
          !query ? '' : query
        }`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const airportCodeSlice = createSlice({
  name: 'airportCode',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state.query = payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getAirportCode.fulfilled, (state, action) => {
      state.data = action.payload;
      state.code = action.payload.map(item => {
        return {
          label: `${item.code} - ${item.name} ( ${item.country_code} ) `,
          value: `${item.code} - ${item.name} ( ${item.country_code} ) `
        };
      });
    });
  }
});

export default airportCodeSlice.reducer;
export const { handleChange } = airportCodeSlice.actions;

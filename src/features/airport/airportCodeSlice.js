import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  query: 'FCO',
  data: null,
  isLoading: false,
  code: []
};

export const getAirportCode = createAsyncThunk(
  'airportCode/getAirportCode',
  async (query, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=airport&term=${
          query === ' ' ? 'FCO' : query
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
    builder
      .addCase(getAirportCode.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAirportCode.fulfilled, (state, action) => {
        state.data = action.payload;
        state.code = action.payload.map(item => {
          return {
            label: `${item.code} - ${item.name} ( ${item.country_code} ) `,
            value: `${item.code} - ${item.name} ( ${item.country_code} ) `
          };
        });
        state.isLoading = false;
      })
      .addCase(getAirportCode.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  }
});

export default airportCodeSlice.reducer;
export const { handleChange } = airportCodeSlice.actions;

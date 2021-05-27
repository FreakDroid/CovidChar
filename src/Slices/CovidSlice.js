import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {covidApi} from '../api/covid-api';


const initialState = {
  status: 'idle',
  filter: 0, /// This can be 1 for today, 7 last week, 31 last month, 0 all from the beginning
  data: {
    counter: []
  }
}

export const getAllCovidCases = createAsyncThunk(
  'covid/getAllCovidCases',
  async () => {
    return covidApi.getAllCovidInfo();
  }
)

export const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    getByTimeFrame: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers : (builder => {
    builder.addCase(getAllCovidCases.pending, (state => {
      state.state = 'loading';
    })).addCase(getAllCovidCases.fulfilled, (state, action) => {
      state.status = 'idle';
      const response = action.payload;
      state.data.counter = [...response]
    });
  })
})

export const { getByTimeFrame } = covidSlice.actions;


export const selectData = (state) => {
  const filter = state.covid.filter;
  const data = state.covid.data.counter;
  if(filter > 0)
    return data.slice(Math.max(data.length - filter, 1))
  return data;
}

export default covidSlice.reducer;
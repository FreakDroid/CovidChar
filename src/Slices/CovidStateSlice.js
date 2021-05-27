import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {covidApi} from '../api/covid-api';


const initialState = {
  status: 'idle',
  filter: 'Alabama',
  date: 'all', /// This can be 1 for today, 7 last week, 31 last month, 0 all from the beginning
  data: {
    counter: []
  }
}

export const getAllStateCovidCases = createAsyncThunk(
  'covid/getAllCovidCases',
  async (state= initialState.filter) => {
    return covidApi.getStateCovidInfo(state);
  }
)


export const covidStateSlice = createSlice({
  name: 'covidByState',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers : (builder => {
    builder.addCase(getAllStateCovidCases.pending, (state => {
      state.state = 'loading';
    })).addCase(getAllStateCovidCases.fulfilled, (state, action) => {
      state.status = 'idle';
      const response = action.payload;
      state.data.counter = [...response]
    });
  })
})

export const { getByState, setDate } = covidStateSlice.actions;


export const selectData = (state) => {
  const date = state.covidState.date;
  const data = state.covidState.data.counter;
  console.log(state)
  if(date > 0)
    return data.slice(Math.max(data.length - date, 1))
  return data;
}

export default covidStateSlice.reducer;
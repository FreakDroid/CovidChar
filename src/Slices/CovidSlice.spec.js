import covidReducer, { getByTimeFrame } from './CovidSlice';

describe('Covid Slice reducer', () => {

  const initialState = {
    status: 'idle',
    filter: 0, /// This can be 1 for today, 7 last week, 31 last month, 0 all from the beginning
    data: {
      counter: []
    }
  };

  it('should handle initial state', () => {
    expect(covidReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle getByTimeFrame', () => {
    const actual = covidReducer(initialState, getByTimeFrame(1));
    expect(actual.filter).toEqual(1);
  });

});
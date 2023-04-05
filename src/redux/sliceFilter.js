import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    qwery(state, action) {
      return (state = action.payload);
    },
    filter(state, action) {},
  },
});

export const { qwery, filter } = sliceFilter.actions;

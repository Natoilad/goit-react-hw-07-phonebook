import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContact } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;

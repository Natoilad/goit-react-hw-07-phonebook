import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(_, { payload }) {
      return payload;
    },
    // qwery(state, action) {
    //   return (state = action.payload);
    // },
    // filter(state, action) {},
  },
});

export const { filterContact } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;

// export const { qwery, filter } = sliceFilter.actions;

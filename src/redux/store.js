import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContact';
import { filterReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContact';
import { filterReducer } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whiteList: ['contacts'],
// };

// const rootReducer = combineReducers({
//   contacts: sliceContact.reducer,
//   filter: sliceFilter.reducer,
// });

// const persistReducerContacts = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistReducerContacts,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistR = persistStore(store);

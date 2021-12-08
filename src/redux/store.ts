import { configureStore } from '@reduxjs/toolkit';
import contactsReducerWithSlice from './slices/contactsSlice';

const rootReducer = {
  contacts: contactsReducerWithSlice,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
})


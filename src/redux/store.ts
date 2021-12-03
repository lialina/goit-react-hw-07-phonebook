import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import contactsReducerWithSlice from './slices/contactsSlice';

const rootReducer = {
  contacts: contactsReducerWithSlice,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
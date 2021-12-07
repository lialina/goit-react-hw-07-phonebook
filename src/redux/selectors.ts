import { RootState } from './types';
// import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const items = (state: RootState) => state.contacts.items;
export const error = (state: RootState) => state.contacts.error;
export const loader = (state: RootState) => state.contacts.loader;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
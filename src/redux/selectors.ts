import { RootState } from './types';

export const items = (state: RootState) => state.contacts.items;
export const error = (state: RootState) => state.contacts.error;
export const loader = (state: RootState) => state.contacts.loader;
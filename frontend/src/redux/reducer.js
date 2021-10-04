import { types } from './types';

export const initialState = {
  contacts: [
    { name: 'Aria Stark', number: '459-12-56', id: 'id-1' },
    { name: 'Paul Atreides', number: '443-89-12', id: 'id-2' },
    { name: 'Hermione Granger', number: '645-17-79', id: 'id-3' },
    { name: 'Frodo Baggins', number: '227-91-26', id: 'id-4' },
  ],
  loader: false,
  error: "",
};

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case types.CONTACT_FETCH_START:
      return { ...state, loader: true };
    case types.CONTACT_FETCH_FINISHED:
      return { ...state, loader: false };
    case types.CONTACT_FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
import { types } from './types';

export const initialState = {
  items: [],
  loader: false,
  error: "",
};

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CONTACT:
      return { ...state, items: payload };
    case types.ADD_CONTACT:
      return { ...state, items: [...state.items, payload] };
    case types.DELETE_CONTACT:
      return { ...state, items: state.items.filter(item => item.id !== payload)};   
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

import { types } from './types';

export const initialState = {
  contacts: [
    { name: 'Aria Stark', number: '459-12-56', id: 'id-1' },
    { name: 'Paul Atreides', number: '443-89-12', id: 'id-2' },
    { name: 'Hermione Granger', number: '645-17-79', id: 'id-3' },
    { name: 'Frodo Baggins', number: '227-91-26', id: 'id-4' },
  ],
};

// !!! Или switch, или handlers

// export const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return { ...state, contacts: [...state.contacts, payload] };
//     default:
//       return state;
//   }
// };

const handlers = {
  [types.ADD_CONTACT]: (state, actions) => ({
    ...state,
    contacts: [...state.contacts, actions.payload],
  }),
  [types.DELETE_CONTACT]: (state, actions) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== actions.payload),
  }),
  DEFAULT: state => state,
};

export const phoneBook = (state = initialState, actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};

import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts, deleteContact } from '../actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loader: false,
    error: "",
  },
  // reducers: {
  //   addContact: (state, action) => ({ ...state, items: [...state.items, action.payload] }),
  // },
  extraReducers: {
    [createContact.pending]: (state) => {
      state.loader = true;
    },
    [createContact.rejected]: (state) => {
      state.loader = false;
      state.error = "Error";
    },
    [createContact.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = "";
      state.items = [...state.items, payload];
    },

    [getContacts.pending]: (state) => {
      state.loader = true;
    },
    [getContacts.rejected]: (state) => {
      state.loader = false;
      state.error = "Error";
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = "";
      state.items = [...state.items, ...payload];
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = [ ...state.items.filter(item => item.id !== payload)]; 
    }
  }
});

// export const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.SET_CONTACT:
//       return { ...state, items: payload };
//     case types.ADD_CONTACT:
//       return { ...state, items: [...state.items, payload] };
//     case types.DELETE_CONTACT:
//       return { ...state, items: state.items.filter(item => item.id !== payload)};   
//     case types.CONTACT_FETCH_START:
//       return { ...state, loader: true };
//     case types.CONTACT_FETCH_FINISHED:
//       return { ...state, loader: false };
//     case types.CONTACT_FETCH_ERROR:
//       return { ...state, error: payload };
//     default:
//       return state;
//   }
// };

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
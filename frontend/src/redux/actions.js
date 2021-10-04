import { types } from './types';
import axios from "axios";

export const addContact = data => ({
  type: types.ADD_CONTACT,
  payload: data,
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

export const contactFetchStart = () => ({
  type: types.CONTACT_FETCH_START,
});

export const contactFetchFinished = () => ({
  type: types.CONTACT_FETCH_FINISHED,
});

export const contactFetchError = (error) => ({
  type: types.CONTACT_FETCH_ERROR,
  payload: error,
});

export const postContactOperation = (contact) => async (dispatch) => {
  dispatch(contactFetchStart());
  try {
    const result = await axios.post("http://localhost:7777/contacts", contact);
    dispatch(addContact(result.data));
    // console.log("result", result.data);
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished());
  }
}

// export function addContact(data) {
//   return {
//     type: types.ADD_CONTACT,
//     payload: data,
//   }
// };

// export function deleteContact(id) {
//   return {
//     type: types.DELETE_CONTACT,
//     payload: id,
//   }
// };

// export function postContactOperation(contact) {
//   return async function () {
//     const result = await axios.post("http://localhost:7777/contacts", contact);
//     console.log("result", result);
//   }
// };

// const thunk = (store) => (next) => (addContact) => {
//   next(addContact());
//   next(postContactOperation());
// }

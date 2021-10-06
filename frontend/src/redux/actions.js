import { types } from './types';
import axios from "axios";

export const setContacts = array => ({
  type: types.SET_CONTACT,
  payload: array,
});

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

export const getContactsOperation = () => async (dispatch) => {
  dispatch(contactFetchStart());
  try {
    const result = await axios.get("http://localhost:7777/contacts");
    dispatch(setContacts(result.data));
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished());
  }
};

export const postContactOperation = (contact) => async (dispatch) => {
  dispatch(contactFetchStart());
  try {
    const result = await axios.post("http://localhost:7777/contacts", contact);
    dispatch(addContact(result.data));
  } catch (error) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished());
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`http://localhost:7777/contacts/${id}`);
    dispatch(deleteContact(id));
    console.log(result)
  } catch (error) {
    dispatch(contactFetchError(error));
  }
}
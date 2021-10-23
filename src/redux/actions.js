import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { actionTitles } from './actionTitles';

const CONTACTS_URL = 'https://61546f8d2473940017efae5d.mockapi.io/contacts';

export const createContact = createAsyncThunk(
  actionTitles.createContact,
  async (contact) => {
    console.log(contact);
    const result = await axios.post(`${CONTACTS_URL}`, contact);
    console.log(contact);
    return result.data;
  }
);

export const getContacts = createAsyncThunk(
  actionTitles.getContacts,
  async () => {
    const result = await axios.get(`${CONTACTS_URL}`);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  actionTitles.deleteContact,
  async (id) => {
    const result = await axios.delete(`${CONTACTS_URL}/${id}`);
    return result.status;
  }
)
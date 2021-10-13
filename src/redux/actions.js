import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://61546f8d2473940017efae5d.mockapi.io';

const actionTitles = {
  getContacts: 'contacts/getContact',
  createContact: 'contacts/createContact',
  deleteContact: 'contacts/deleteContact',
}

export const createContact = createAsyncThunk(
  actionTitles.createContact,
  async (contact) => {
    const result = await axios.post(`${URL}/contacts`, contact);
    return result.data;
  }
);

export const getContacts = createAsyncThunk(
  actionTitles.getContacts,
  async () => {
    const result = await axios.get(`${URL}/contacts`);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  actionTitles.deleteContact,
  async (id) => {
    await axios.delete(`${URL}/contacts/${id}`);
    return id;
  }
)
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { actionTitles } from './actionTitles';

const MOCKAPI_URL = 'https://61546f8d2473940017efae5d.mockapi.io';

export const createContact = createAsyncThunk(
  actionTitles.createContact,
  async (contact) => {
    const result = await axios.post(`${MOCKAPI_URL}/contacts`, contact);
    return result.data;
  }
);

export const getContacts = createAsyncThunk(
  actionTitles.getContacts,
  async () => {
    const result = await axios.get(`${MOCKAPI_URL}/contacts`);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  actionTitles.deleteContact,
  async (id) => {
    await axios.delete(`${MOCKAPI_URL}/contacts/${id}`);
    return id;
  }
)
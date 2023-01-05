import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63b1fd165e490925c511f393.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



// import * as contactsActions from './contactsActions';

// export const fetchContacts = () => async dispatch => {
// dispatch(contactsActions.fetchContactsRequest());

// try{
// const contacts = await contactsAPI.fetchContacts();
// dispatch(contactsActions.fetchContactsSuccess(contacts));
// } catch (error) {
// dispatch(contactsActions.fetchContactsError(error));
// }
// };

// =====================================

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// =====================================

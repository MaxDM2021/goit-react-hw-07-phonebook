import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContact,
} from '../contacts/contactsOperations';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
    isLoading: false,
    error: null,
  },

  extraReducers: {

    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: onRejected,

    [addContacts.pending]: onPending,
    [addContacts.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContacts.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: onRejected,

  },
});

// ===== Selectors ======


export const getContacts = state => state.contact.items;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;

export const contactsReducer = contactsSlice.reducer;


// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) =>
//       (state.entities = payload),
//     [fetchContacts.pending]: state => (state.isLoading = true),
//   },
// });

// console.log(contactsSlice);

// export default contactsSlice.reducer;

// import * as contactsActions from './contactsActions';

// const entities = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//   });

//   const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//   });

//   const error = createReducer(null, {
//     [fetchContacts.rejected]: (_, action) => action.payload,
//     [fetchContacts.pending]: () => null,
//   });

//   export default combineReducers({
//     entities,
//     isLoading,
//     error,
//   });

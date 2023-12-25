import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const contactsSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    currentId: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    sortContacts(state, { payload }) {
      state.items = payload;
    },
    setCurrentId(state, { payload }) {
      state.currentId = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((el) => {
          if (el.id === payload.id) return payload;
          return el;
        });
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { sortContacts, setCurrentId } = contactsSlice.actions;

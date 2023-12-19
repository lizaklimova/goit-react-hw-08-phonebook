import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterSearchReducer } from "./filterSearch/filterSearchSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterSearch: filterSearchReducer,
  },
});

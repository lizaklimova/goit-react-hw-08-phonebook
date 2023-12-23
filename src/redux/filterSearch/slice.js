import { createSlice } from "@reduxjs/toolkit";

const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState: { filter: "" },
  reducers: {
    filterSearch: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterSearch } = filterSearchSlice.actions;
export const filterSearchReducer = filterSearchSlice.reducer;

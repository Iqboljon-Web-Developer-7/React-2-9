import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "Category",
  initialState: {
    value: "",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCategory } = category.actions;
export default category.reducer;

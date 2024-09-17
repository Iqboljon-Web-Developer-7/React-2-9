import { createSlice } from "@reduxjs/toolkit";

const isLogged = createSlice({
  name: "isLogged",
  initialState: {
    value: JSON.parse(localStorage.getItem("isLogged")) || false,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.value = true;
      localStorage.setItem("isLogged", JSON.stringify(state.value));
    },
    loggedOut: (state, action) => {
      state.value = false;
      localStorage.setItem("isLogged", JSON.stringify(state.value));
    },
  },
});

export const { loggedIn, loggedOut } = isLogged.actions;
export default isLogged.reducer;

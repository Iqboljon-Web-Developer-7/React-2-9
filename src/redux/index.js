import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import isLogged from "./slices/isLogged";

export const store = configureStore({
  reducer: {
    isLogged,

    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

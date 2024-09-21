import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import isLogged from "./slices/isLogged";
import cartSlice from "./slices/cart-slice";
import categorySlice from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    isLogged,
    cart: cartSlice,
    category: categorySlice,

    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

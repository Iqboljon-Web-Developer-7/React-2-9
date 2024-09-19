import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      if (state.value.findIndex((x) => x._id == action.payload._id) < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
        console.log(1);
      } else {
        state.value = state.value.filter(
          (item, idx) => item._id != action.payload._id
        );
      }

      console.log(state.value);
    },
    remove: (state, action) => {
      console.log(action);

      state.value = state.value.filter((item) => item._id != action.payload);
    },
    update: (state, action) => {
      state.value = state.value.map((item, idx) =>
        item.id == action.payload.id
          ? (state.value[idx] = action.payload.cart)
          : item
      );
    },
    // increment: (state,action) => {

    // }
  },
});

export const { add, remove, update } = cart.actions;
export default cart.reducer;

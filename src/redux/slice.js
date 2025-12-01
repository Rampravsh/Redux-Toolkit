import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearAllItem: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItem } = addToCart.actions;
export default addToCart.reducer;

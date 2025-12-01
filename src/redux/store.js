import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    Products: productReducer,
  },
});

export default store;

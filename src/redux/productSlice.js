import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const resp = await fetch("http://dummyjson.com/products");
  const jsonResp = await resp.json();
  return jsonResp.products;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.status = "succeded"), (state.items = action.payload);
    });
  },
});

export default productSlice.reducer;

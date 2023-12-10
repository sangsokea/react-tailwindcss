import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../library/baseUrl";

const initialState = {
  products: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  singleProduct: {}
};

// createSlice() will generate action creators and action types that correspond to the reducers and state.
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(BASE_URL + "/products");
    const data = await response.json();
    return data;
  }
);

export const fetchProductsById = createAsyncThunk(
    "product/fetchProductsById",
    async (id) => {
      const response = await fetch(BASE_URL + "/products/" + id);
      const data = await response.json();
      return data;
    }
  );

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //   fetchProductsById
    .addCase(fetchProductsById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }) 
  },
});

export default productSlice.reducer;

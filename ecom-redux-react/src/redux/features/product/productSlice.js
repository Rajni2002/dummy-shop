import { createSlice } from "@reduxjs/toolkit";
// import { createAction } from "@reduxjs/toolkit";
// import ActionTypes from "../../contents/action-types";

// const setProducts = createAction('SET_PRODUCTS');
// const selectedProduct = createAction('SELECTED_PRODUCT');
// const removeSelectedProduct = createAction('REMOVE_SELECTED_PRODUCT');


const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice;

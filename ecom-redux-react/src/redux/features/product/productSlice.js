import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fakeStoreaApi from "../../../api/fakeStoreaApi";


export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async (thunkAPI) => {
    const response = await fakeStoreaApi.get("/products").catch((err) => {
      console.log(err);
    });
    return response;
  }
);
export const fetchProductDetail = createAsyncThunk(
  "product/getSelectedProducts",
  async (id) => {
    const response = await fakeStoreaApi.get(`/products/${id}`).catch((err) => {
      console.log(err);
    });
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: {
      entities: [],
      loading: false,
    },
    selectedProduct: {
      entities: [],
      loading: false,
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.products.entities = action.payload;
    },
    selectedProducts: (state, action) => {
      state.selectedProduct.entities = action.payload;
    },
    removeSelectedProduct: (state, action) => {
      state.selectedProduct.entities = [];
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products.loading = false;
      state.products.entities = payload.data;
    },
    [fetchProducts.rejected]: (state) => {
      state.products.loading = false;
    },
    [fetchProductDetail.pending]: (state) => {
      state.selectedProduct.loading = true;
    },
    [fetchProductDetail.fulfilled]: (state, { payload }) => {
      state.selectedProduct.loading = false;
      state.selectedProduct.entities = payload.data;
    },
    [fetchProductDetail.rejected]: (state) => {
      state.selectedProduct.loading = false;
    },
  },
});

export const {
  setProducts,
  selectedProducts,
  removeSelectedProduct,
} = productSlice.actions;

// async call to fetchProducts for ProductsListing.jsx
// M-1
// export const fetchProducts = () => async (dispatch) => {
//   const response = await fakeStoreaApi
//       .get("/products")
//       .catch((err) => {
//         console.log(err);
//       });
//       dispatch(setProducts(response.data));
// };

// M-2



// async call to fetchProductDetail for ProductsDetail.jsx



// M-2

// export const fetchProductDetail = createAsyncThunk(
//   "product/fetchById",
//   async () => {
//     const response = await fakeStoreaApi.get(`/products/${id}`).catch((err) => {
//       console.log(err);
//     });
//     return response.data;
//   }
// );

export default productSlice;

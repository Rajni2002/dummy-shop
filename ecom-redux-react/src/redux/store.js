import { configureStore} from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    allProducts: productSlice.reducer,
  },
});

export default store;

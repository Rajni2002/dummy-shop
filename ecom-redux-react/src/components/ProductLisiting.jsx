import React, { useEffect } from "react";
import ProductsComponent from "./ProductsComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
} from "../redux/features/product/productSlice";

function ProductListing() {
  const dispatch = useDispatch();
  const { loading } = useSelector(
    (state) => state.allProducts.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <div>Loading......</div>;
  }
  return (
    <div>
      <ProductsComponent />
    </div>
  );
}

export default ProductListing;

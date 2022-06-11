import React, { useEffect } from "react";
import ProductsComponent from "./ProductsComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/features/product/productSlice";

function ProductListing() {
  const dispatch = useDispatch();
  async function fetchProducts() {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <ProductsComponent />
    </div>
  );
}

export default ProductListing;

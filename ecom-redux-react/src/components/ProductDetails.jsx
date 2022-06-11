import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
} from "../redux/features/product/productSlice";
import StarsIcon from "@mui/icons-material/Stars";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductDetails() {
  const { productId } = useParams();
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const { category, title, price, description, image } = selectedProduct;
  const dispatch = useDispatch();
  async function fetchProductDetail() {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => {
        console.log("Error : ", e);
      });
    dispatch(selectedProducts(response.data));
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(selectedProduct).length === 0 ? (
        <div>Loading......</div>
      ) : (
        <Card
          sx={{ maxWidth: 1500 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3rem 3rem",
            padding: "3rem",
          }}
        >
          <img
            src={image}
            srcSet={image}
            alt={title}
            loading="lazy"
            style={{
              objectFit: "contain",
              height: "50vh",
              margin: "5rem",
            }}
          />
          <div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="GrayText"
              >
                Category : {category}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {title}
              </Typography>
              <Typography variant="body" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="outlined">
                ${price}
              </Button>
            </CardActions>
          </div>
        </Card>
      )}
    </div>
  );
}

export default ProductDetails;

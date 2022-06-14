import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetail,
  removeSelectedProduct,
} from "../redux/features/product/productSlice.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { entities, loading } = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const { category, title, price, description, image } = entities;


  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetail(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch]);

  if(loading) return (<div>Loading......</div>)

  return (
    <div>
      {
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
      }
    </div>
  );
}

export default ProductDetails;

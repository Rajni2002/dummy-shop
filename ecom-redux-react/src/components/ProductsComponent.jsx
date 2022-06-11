import React from "react";
import { useSelector } from "react-redux";
import { CardContent, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function ProductsComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    const trimmedTitle = title.substr(0, title.lastIndexOf(" ", 30));
    return (
      <Grid key={id} item>
        <Link to={`/products/${id}`}>
          <Paper
            sx={{
              height: 450,
              width: 350,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                srcSet={image}
                alt={title}
                loading="lazy"
                style={{ objectFit: "contain", width: "80%", height: "100%" }}
              />
            </div>
            <Divider />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="text.secondary"
              >
                {trimmedTitle}
              </Typography>
              <Typography variant="h5" color="text.primary">
                ${price}
              </Typography>
              <Typography
                variant="body"
                color="text.primary"
                style={{ textTransform: "capitalize" }}
              >
                {category}
              </Typography>
            </CardContent>
          </Paper>
        </Link>
      </Grid>
    );
  });

  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      spacing={1}
      style={{ marginTop: "3rem" }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={15}>
          {Object.keys(products).length === 0 ? (
            <div>Loading......</div>
          ) : (
            renderList
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductsComponent;

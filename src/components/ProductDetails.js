import React from "react";
import { Typography, IconButton, Button, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import accounting from "accounting";

const ProductDetails = ({ product }) => {
  //   const { id, name, productType, price, rating, image } = product;
  return (
    <>
      <Typography
        variant="h4"
        color="textSecondary"
        sx={{ marginBottom: "2rem" }}
      >
        Vans shoes
      </Typography>
      <img
        src="https://i.pinimg.com/originals/63/81/8e/63818e317804c0695b615eb533b67195.jpg"
        alt="productType"
        height="240"
        width="400"
        style={{ float: "left" }}
      />
      {Array(4)
        .fill()
        .map((_, i) => (
          <p key={i}>&#11088;</p>
        ))}

      <Typography
        variant="h6"
        color="textPrimary"
        sx={{ marginBottom: "0.5rem" }}
      >
        Nombre producto
      </Typography>

      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ marginBottom: "0.5rem" }}
      >
        Descripcion
      </Typography>

      <Typography variant="h5" color="textSecondary">
        {accounting.formatMoney(1000, "€")}
      </Typography>

      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>

      <Button variant="contained" color="success">
        Personalizalo
      </Button>

      <CardContent>
      <Typography
        variant="h6"
        color="textSecondary"
      >
        Descripcion envio
      </Typography>
      </CardContent>
    </>
  );
};

export default ProductDetails;

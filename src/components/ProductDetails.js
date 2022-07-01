import React from "react";
import { Typography, IconButton, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import accounting from "accounting";
import { grey } from "@mui/material/colors";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ReplayIcon from "@mui/icons-material/Replay";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const greyColor = grey[200];

  const location = useLocation();

  const { id, name, productType, price, rating, image, description } =
    location.state.product;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <img src={image} alt={name} height="400" width="350" />
      </Box>

      <Box>
        <Typography variant="h6" color="textPrimary">
          Descripción
        </Typography>

        <Typography variant="h6" color="textSecondary">
          {description}
        </Typography>

        <Typography variant="h6" color="textPrimary">
          Tipo de producto
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {productType}
        </Typography>

        <Typography variant="h6" color="textPrimary">
          Precio
        </Typography>

        <Typography variant="h6" color="textSecondary">
          {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import accounting from "accounting";
import { addToFavoritesAction } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
  const { id, productType, price, rating, image } = product;

  const addToFavorites = (id) => dispatch(addToFavoritesAction(id));

  const { favorites } = useSelector((state) => state.user);

  const handleAddToFavorites = (event, id) => {
    event.preventDefault();
    addToFavorites(id);
    console.log(favorites);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="240" image={image} alt={productType} />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={(event) => handleAddToFavorites(event, id)}
        >
          <FavoriteIcon />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{ marginLeft: "auto" }}
        >
          {accounting.formatMoney(price, "€")}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Product;

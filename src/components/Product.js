import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddShoppingCart } from "@mui/icons-material";
import accounting from "accounting";
import {
  addToFavoritesAction,
  removeFavoritesAction,
} from "../actions/userAction";
import { addToBasketAction } from "../actions/basketAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product({ product }) {
  const dispatch = useDispatch();
  const { id, name, productType, price, rating, image, description } = product;

  const addToFavorites = (item) => dispatch(addToFavoritesAction(item));
  const removeFavorites = (id) => dispatch(removeFavoritesAction(id));
  const addToBasket = (item) => dispatch(addToBasketAction(item));

  const { favorites } = useSelector((state) => state.user);

  const existProduct = (id) => {
    let exist = false;
    favorites.map((item) => {
      if (item.id === id) {
        exist = true;
        return exist;
      }
    });
    return exist;
  };

  const handleAddToFavorites = (event, id) => {
    event.preventDefault();
    const exist = existProduct(id);
    console.log(exist);
    exist
      ? removeFavorites(id)
      : addToFavorites({
          id,
          name,
          productType,
          price,
          rating,
          image,
          description,
        });
    console.log(favorites);
  };

  const handleAddToBasket = (event) => {
    event.preventDefault();
    addToBasket({
      id,
      name,
      productType,
      price,
      rating,
      image,
      description,
    });
  };

  return (
    <Link
      to="/product-details"
      state={{ product }}
      style={{ textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          width="200"
          image={image}
          alt={productType}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="Add to favorites"
            onClick={(event) => handleAddToFavorites(event, id)}
          >
            <FavoriteIcon color={existProduct(id) ? "error" : ""} />
          </IconButton>

          <IconButton
            aria-label="Add to Cart"
            onClick={(event) => handleAddToBasket(event)}
          >
            <AddShoppingCart fontSize="large" />
          </IconButton>
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))} */}
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ marginLeft: "auto" }}
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

export default Product;

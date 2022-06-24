import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddShoppingCart } from "@mui/icons-material";
import accounting from "accounting";
import { addToBasketAction } from "../actions/basketAction";
import { useDispatch } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Product({ product }) {
  const { id, name, productType, price, rating, image, description } = product;
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const addToBasket = (item) => dispatch(addToBasketAction(item));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToBasket = () => {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="240" image={image} alt={productType} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;

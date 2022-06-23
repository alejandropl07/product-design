import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Delete } from "@mui/icons-material";
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function CheckoutCard({ product }) {
  const { id, name, productType, price, rating, image } = product;
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            sx={{ marginTop: "1rem" }}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia component="img" height="194" image={image} alt={productType} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton aria-label="delete" onClick={removeItem}>
          <Delete sx={{ marginLeft: "auto" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CheckoutCard;

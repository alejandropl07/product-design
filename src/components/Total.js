import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Total = () => {
  const { basket } = useSelector((state) => state.basket);

  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="total">
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>
      <Link to="/checkout">
        <Button className="checkout-button" variant="contained" color="primary">
          Check out
        </Button>
      </Link>
    </div>
  );
};

export default Total;

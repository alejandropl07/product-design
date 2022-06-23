import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo.png";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { emptyBasketAction } from "../actions/basketAction";
import { setUserAction } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyBasket = (id) => dispatch(emptyBasketAction(id));
  const setUser = (id) => dispatch(setUserAction(id));

  const { basket } = useSelector((state) => state.basket);
  const { user } = useSelector((state) => state.basket);

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
      emptyBasket();
      setUser(null);
      navigate("/sign-in");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", backgroundColor: "whitesmoke" }}
      >
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                alt="eCommerce"
                style={{
                  marginRight: "1rem",
                  height: "3rem",
                }}
              />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ marginRight: "1rem" }}
          >
            Hello {user ? user.email : "Guest"}
          </Typography>

          <Link to="/sign-in">
            <Button variant="outlined" onClick={handleSignOut}>
              <strong> {user ? "Sign Out" : "Sign In"} </strong>
            </Button>
          </Link>

          <Link to="/checkout-page">
            <IconButton
              aria-label="show-cart-items"
              color="inherit"
              sx={{ marginRight: "1rem" }}
            >
              <Badge badgeContent={basket.length} color="secondary">
                <ShoppingCartIcon fontSize="large" color="primary" />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

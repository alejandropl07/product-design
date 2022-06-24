import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.png";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { emptyBasketAction } from "../actions/basketAction";
import { setUserAction } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyBasket = (id) => dispatch(emptyBasketAction(id));
  const setUser = (id) => dispatch(setUserAction(id));

  const { basket } = useSelector((state) => state.basket);
  const { user } = useSelector((state) => state.user);

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
              id="logo-button"
              color="inherit"
              aria-label="menu"
              disableRipple="true"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                alt="eCommerce"
                style={{
                  marginRight: "1rem",
                  height: "4.5rem",
                }}
              />
            </IconButton>
          </Link>
          {/* <LocalPhoneIcon
            fontSize="large"
            sx={{ boxShadow: "none", color: "black" }}
          />
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ marginLeft: ".5rem", color: "black" }}
          >
            53581322
          </Typography> */}
          <SearchIcon
            fontSize="large"
            sx={{ boxShadow: "none", color: "black" }}
          />
          <TextField
            placeholder="Que estas buscando..."
            variant="standard"
            size="5rem"
            sx={{ marginLeft: "1rem", verticalAlign: "center" }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton sx={{ visibility: "hidden" }}> {/* mostrar cruz de limpiar si tiene algo escrito */}
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ marginRight: "1rem" }}
          >
            {/* Hello {user ? user.email : "Guest"} */}
            {user ? user.email : ""}
          </Typography>
          {/* <Link to="/sign-in">
            <Button variant="outlined" onClick={handleSignOut}>
              <strong> {user ? "Sign Out" : "Sign In"} </strong>
            </Button>
          </Link> */}
          <Link
            to={!user ? "/sign-in" : "/user-details" }
          >
            <IconButton
              aria-label="show-cart-items"
              color="inherit"
              disableRipple="true"
            >
              <PersonOutlineSharpIcon
                sx={{ fontSize: 45 }}
                color="primary"
                className="icon-hover"
              />
            </IconButton>
          </Link>
          <Link to="/checkout-page">
            <IconButton
              aria-label="show-cart-items"
              color="inherit"
              disableRipple="true"
            >
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                badgeContent={basket.length}
                color="info"
              >
                <FavoriteBorderIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                  className="icon-hover"
                />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/checkout-page">
            <IconButton
              aria-label="show-cart-items"
              color="inherit"
              sx={{ marginRight: "1rem" }}
              disableRipple="true"
            >
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                badgeContent={basket.length}
                color="info"
              >
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 40 }}
                  color="primary"
                  className="icon-hover"
                />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

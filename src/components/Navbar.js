// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.png";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { emptyBasketAction } from "../actions/basketAction";
import { setUserAction } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

// export default function Navbar() {
// const dispatch = useDispatch();
// const navigate = useNavigate();

// const emptyBasket = (id) => dispatch(emptyBasketAction(id));
// const setUser = (id) => dispatch(setUserAction(id));

// const { basket } = useSelector((state) => state.basket);
// const { user } = useSelector((state) => state.user);

// const handleSignOut = () => {
//   if (user) {
//     auth.signOut();
//     emptyBasket();
//     setUser(null);
//     navigate("/sign-in");
//   }
// };

//   return (
//     <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
//       <AppBar
//         position="fixed"
//         sx={{ boxShadow: "none", backgroundColor: "whitesmoke" }}
//       >
//         <Toolbar>
// <Link to="/">
//   <IconButton
//     size="large"
//     edge="start"
//     id="logo-button"
//     color="inherit"
//     aria-label="menu"
//     disableRipple="true"
//     sx={{ mr: 2 }}
//   >
//     <img
//       src={logo}
//       alt="eCommerce"
//       style={{
//         marginRight: "1rem",
//         height: "4.5rem",
//       }}
//     />
//   </IconButton>
// </Link>
//           {/* <LocalPhoneIcon
//             fontSize="large"
//             sx={{ boxShadow: "none", color: "black" }}
//           />
//           <Typography
//             variant="h6"
//             color="textPrimary"
//             component="p"
//             sx={{ marginLeft: ".5rem", color: "black" }}
//           >
//             53581322
//           </Typography> */}

// {/* <IconButton
//   aria-label="show-cart-items"
//   color="inherit"
//   disableRipple="true"
// >
// <SearchIcon
//   // fontSize="large"
//   sx={{
//     boxShadow: "none",
//     color: "black",
//     fontSize: "3rem",
//     borderWidth: 1,
//   }}
// />
// </IconButton>
// <TextField
//   placeholder="Que estas buscando..."
//   variant="standard"
//   size="5rem"
//   // fullWidth="true"
//   sx={{ marginLeft: "1rem", verticalAlign: "center" }}
//   InputProps={{
//     endAdornment: (
//       <InputAdornment>
//         <IconButton sx={{ visibility: "hidden" }}>
//           {" "}
//           {/* mostrar cruz de limpiar si tiene algo escrito */}
//           <CloseIcon />
//         </IconButton>
//       </InputAdornment>
//     ),
//   }}
// /> */}
// <Box sx={{ flexGrow: 1 }} />
// <Typography
//   variant="h6"
//   color="textPrimary"
//   component="p"
//   sx={{ marginRight: "1rem" }}
// >
//   {/* Hello {user ? user.email : "Guest"} */}
//   {user ? user.email : ""}
// </Typography>
// {/* <Link to="/sign-in">
//   <Button variant="outlined" onClick={handleSignOut}>
//     <strong> {user ? "Sign Out" : "Sign In"} </strong>
//   </Button>
// </Link> */}
// {/* <Link to={!user ? "/sign-in" : "/user-details"}>
//   <IconButton
//     aria-label="show-cart-items"
//     color="inherit"
//     disableRipple="true"
//   >
//     <PersonIcon
//       sx={{ fontSize: 45, color: "black" }}
//       color="primary"
//       className="icon-hover"
//     />
//   </IconButton>
// </Link>
// <Link to="/checkout-page">
//   <IconButton
//     aria-label="show-cart-items"
//     color="inherit"
//     disableRipple="true"
//   >
//     <Badge
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       badgeContent={basket.length}
//       color="info"
//     >
//       <FavoriteIcon
//         sx={{ fontSize: 40, color: "black" }}
//         color="primary"
//         className="icon-hover"
//       />
//     </Badge>
//   </IconButton>
// </Link>
// <Link to="/checkout-page">
//   <IconButton
//     aria-label="show-cart-items"
//     color="inherit"
//     sx={{ marginRight: "1rem" }}
//     disableRipple="true"
//   >
//     <Badge
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       badgeContent={basket.length}
//       color="info"
//       // sx={{ color: "black" }}
//     >
//       <ShoppingCartIcon
//         sx={{ fontSize: 40, color: "black" }}
//         // color="primary"
//         className="icon-hover"
//       />
//     </Badge>
//   </IconButton>
// </Link>  */}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handle = () => {
  //   alert('sd')
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to={!user ? "/sign-in" : "/user-details"} style={{ textDecoration: 'none', color: 'black'}}>
          <IconButton
            aria-label="show-cart-items"
            color="inherit"
            disableRipple="true"
          >
            <PersonIcon
              sx={{ fontSize: 45, color: "black" }}
              color="primary"
              className="icon-hover"
            />
            <Typography
              variant="h6"
              noWrap
              component="p"
            >
              {user ? "Perfil" : "Autenticar"}
            </Typography>
          </IconButton>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/checkout-page" style={{ textDecoration: 'none', color: 'black'}}>
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
              <FavoriteIcon
                sx={{ fontSize: 40, color: "black" }}
                color="primary"
                className="icon-hover"
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
              >
                Favoritos
              </Typography>
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to="/checkout-page" style={{ textDecoration: 'none', color: 'black'}}>
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
              <ShoppingCartIcon
                sx={{ fontSize: 40, color: "black" }}
                // color="primary"
                className="icon-hover"
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
              >
                Carrito
              </Typography>
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", backgroundColor: "whitesmoke", paddingLeft: "4rem", paddingRight: "4rem" }}
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
          <IconButton
            aria-label="show-cart-items"
            color="inherit"
            disableRipple="true"
            onClick={handle}
          >
            <SearchIcon
              className="icon-hover"
              sx={{
                boxShadow: "none",
                color: "black",
                fontSize: "3rem",
                borderWidth: 1,
              }}
            />
          </IconButton>
          {/* {{ if( isMobile) }}} */}
          <TextField
            placeholder="¿Que estás buscando...?"
            variant="standard"
            size="5rem"
            // fullWidth="true"
            sx={{ marginLeft: "1rem", verticalAlign: "center" }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton sx={{ visibility: "hidden" }}>
                    {""}
                    {/* mostrar cruz de limpiar si tiene algo escrito */}
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={!user ? "/sign-in" : "/user-details"}>
              <IconButton
                aria-label="show-cart-items"
                color="inherit"
                disableRipple="true"
              >
                <PersonIcon
                  sx={{ fontSize: 45, color: "black" }}
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
                  <FavoriteIcon
                    sx={{ fontSize: 40, color: "black" }}
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
                  // sx={{ color: "black" }}
                >
                  <ShoppingCartIcon
                    sx={{ fontSize: 40, color: "black" }}
                    // color="primary"
                    className="icon-hover"
                  />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ fontSize: 40, color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

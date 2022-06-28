import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AppBar, IconButton, Typography, Button, Badge } from "@mui/material";

function NavBar({cart}) {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
    console.log(icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <AppBar position="static">
      <nav className="navbar navbar-expand-md " role="navigation">
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <KeyboardCommandKeyIcon />
        </IconButton>
        <NavLink to={"/"} className="navbar-brand">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RENTLY
          </Typography>
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          {icon ? <CloseIcon /> : <MenuIcon />}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className={
              icon ? " navbar-nav nav-menu-mobile " : " navbar-nav nav-menu"
            }
          >
            <li className="nav-item active"><NavLink to={"/"} className="nav-link" onClick={closeSideDrawer}>
              <Button color="inherit" className="button">
                Home
              </Button>
            </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/product"}
                className="nav-link"
                onClick={closeSideDrawer}
              >
                <Button color="inherit" className="button">
                  Product
                </Button>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/services"}
                className="nav-link"
                onClick={closeSideDrawer}
              >
                <Button color="inherit" className="button">
                  Services
                </Button>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/about"}
                className="nav-link"
                onClick={closeSideDrawer}
              >
                <Button color="inherit" className="button">
                  About Us
                </Button>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to={"/contact"}
                className="nav-link"
                onClick={closeSideDrawer}
              >
                <Button color="inherit" className="nav-button">
                  Contact
                </Button>
              </NavLink>
            </li>
          </ul>
          <div className="icon-group">
            <NavLink to={"./cart"}>
              <IconButton size="large" aria-label="cartButton">
                <Badge badgeContent={cart.length} color="primary">
                  {" "}
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                </Badge>
              </IconButton>
            </NavLink>
            <NavLink to={"./login"}>

              <IconButton
                size="large"
                aria-label="profile-button"
              >
                {" "}
                <PermIdentityIcon className="cart-icon"/>
              </IconButton>
            </NavLink>
          </div>
        </div>
      </nav>
    </AppBar>
  );
}

export default NavBar;

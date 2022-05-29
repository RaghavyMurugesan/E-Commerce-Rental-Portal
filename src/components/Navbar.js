import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.css";

function NavBar() {
  return (
    <nav className="Navbar">
      <AppBar position="static" />
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          {" "}
          <KeyboardCommandKeyIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          RENTLY
        </Typography>
        <NavLink to={"/"} className="text-link">
          <Button color="inherit" className="button">
            Home
          </Button>
        </NavLink>
        <NavLink to={"./product"} className="text-link">
          <Button color="inherit" className="button">
            Products
          </Button>
        </NavLink>
        <NavLink to={"./services"} className="text-link">
          <Button color="inherit" className="button">
            Services
          </Button>
        </NavLink>
        <NavLink to={"./about"} className="text-link">
          <Button color="inherit" className="button">
            About Us
          </Button>
        </NavLink>
        <NavLink to={"./contact"} className="text-link">
          <Button color="inherit" className="button">
            Contact
          </Button>
          <IconButton size="large" edge="end" aria-label="cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon className="cart-icon" />
            </Badge>
          </IconButton>
        </NavLink>
      </Toolbar>
    </nav>
  );
}

export default NavBar;

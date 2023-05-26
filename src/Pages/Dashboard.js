import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton, Avatar, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "../Styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [draweropen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: { width: "250px" },
        }}
        anchor="left"
        open={draweropen}
        onClose={() => setDrawerOpen(false)}
        className="sidebar">
        <Box p={2} role="presentation" className="side-head">
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography variant="h6" component="div">
            Admin Dashboard
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="All Product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/product/add")}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Dashboard;

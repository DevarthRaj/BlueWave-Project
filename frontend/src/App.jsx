import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Dashboard from "./component/Dashboard.jsx";

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            🌊 Authorities Dashboard
          </Typography>
          <LogoutIcon />
        </Toolbar>
      </AppBar>

      {/* Left Drawer Menu */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Heat Map" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;

import React from 'react';
import {
  Drawer, Toolbar, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography
} from '@mui/material';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar({ width = 240 }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          bgcolor: '#0f2744',
          color: '#fff'
        }
      }}
    >
      <Toolbar />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
          Authorities
        </Typography>
      </Box>
      <List>
        <ListItemButton selected>
          <ListItemIcon><WifiTetheringIcon sx={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Live Data" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><ShowChartIcon sx={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Predictions" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><NotificationsIcon sx={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Alerts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><SettingsIcon sx={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

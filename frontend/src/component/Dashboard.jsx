import React from "react";
import { Typography, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Live Kallakkadal Monitoring
      </Typography>

      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography>🌊 Current Status: Safe</Typography>
        <Typography>📡 Prediction: Possible Sneaker Wave in 12 hrs</Typography>
        <Typography>📅 Tomorrow: High Risk</Typography>
      </Paper>

      <Paper style={{ padding: "20px" }}>
        <Typography variant="h6">Heat Map Visualization</Typography>
        <img
          src="https://via.placeholder.com/400x200.png?text=Heat+Map"
          alt="Heat Map"
          style={{ marginTop: "10px", width: "100%", borderRadius: "8px" }}
        />
      </Paper>
    </div>
  );
};

export default Dashboard;

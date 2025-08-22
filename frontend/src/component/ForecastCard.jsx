import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';

export default function ForecastCard({ day, status }) {
  const color = status === 'DANGER' ? 'error' : status === 'WARNING' ? 'warning' : 'success';
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">{day}</Typography>
          <Chip label={status} color={color} />
        </Stack>
      </CardContent>
    </Card>
  );
}

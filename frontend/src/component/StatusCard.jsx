import React from 'react';
import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';

export default function StatusCard({ title, items = [], status = 'SAFE' }) {
  const color = status === 'DANGER' ? 'error' : status === 'WARNING' ? 'warning' : 'success';
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="subtitle1" fontWeight={600}>{title}</Typography>
          {items.map((it, i) => (
            <Stack key={i} direction="row" justifyContent="space-between">
              <Typography color="text.secondary">{it.label}</Typography>
              {it.label === 'Status'
                ? <Chip size="small" label={it.value} color={color} />
                : <Typography fontWeight={600}>{it.value}</Typography>}
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

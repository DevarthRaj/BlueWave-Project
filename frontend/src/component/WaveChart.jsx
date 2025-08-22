import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

export default function WaveChart({ data }) {
  return (
    <div style={{ width: '100%', height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 2.5]} />
          <Tooltip />
          <Line type="monotone" dataKey="height" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

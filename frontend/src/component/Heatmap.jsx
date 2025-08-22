import React, { useEffect, useRef } from 'react';

/**
 * data: 2D array [rows][cols] with values 0..~1.5
 * width/height: canvas size in pixels
 */
export default function Heatmap({ data, width = 520, height = 200 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data?.length) return;
    const canvas = ref.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const rows = data.length;
    const cols = data[0].length;
    const cellW = width / cols;
    const cellH = height / rows;

    // Find global min/max for normalization
    let min = Infinity, max = -Infinity;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const v = data[r][c];
        if (v < min) min = v;
        if (v > max) max = v;
      }
    }
    const norm = (v) => (v - min) / (max - min + 1e-9);

    // Simple "scientific" colormap (blue → green → yellow → red)
    const colorMap = (t) => {
      // t in [0,1]
      const r = Math.max(0, 255 * (t - 0.5) * 2);
      const g = t < 0.5 ? 255 * (t * 2) : 255 * (1 - (t - 0.5) * 2) + 128 * (t - 0.5) * 2;
      const b = Math.max(0, 255 * (1 - t) * 1.2);
      return `rgb(${r|0},${g|0},${b|0})`;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = colorMap(norm(data[r][c]));
        ctx.fillRect(c * cellW, r * cellH, Math.ceil(cellW), Math.ceil(cellH));
      }
    }
  }, [data, width, height]);

  return <canvas ref={ref} style={{ width, height, borderRadius: 8 }} />;
}

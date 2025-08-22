// Simple rule-based safety classifier for demo
// Tune thresholds to your buoy data.
export function predictSafety(waveHeightM, wavePeriodS) {
  // Strong long-period swell is riskier;
  // Use combined score weighted by period.
  const score = waveHeightM * (wavePeriodS / 10);

  if (score >= 2.4 || waveHeightM >= 1.8 || wavePeriodS >= 22) return 'DANGER';
  if (score >= 1.2 || waveHeightM >= 1.0 || wavePeriodS >= 16) return 'WARNING';
  return 'SAFE';
}

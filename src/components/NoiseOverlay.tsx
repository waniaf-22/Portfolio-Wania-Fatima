const NoiseOverlay = () => (
  <div
    className="noise"
    style={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 999,
    }}
  />
);

export default NoiseOverlay;

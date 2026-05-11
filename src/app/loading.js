// Minimal loading indicator — just a tiny top bar, no full-screen block
export default function Loading() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
      zIndex: 9999,
      animation: "loadingBar 1s ease-out forwards",
    }} />
  );
}

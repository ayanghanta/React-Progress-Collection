export default function Button({
  children,
  color = "#fff",
  bgColor = "#ae4ee6",
  size = 20,
  className = "",
}) {
  const btnStyle = {
    color,
    backgroundColor: bgColor,
    fontSize: `${size}px`,
  };
  return (
    <button className={`btn ${className}`} style={btnStyle}>
      {children}
    </button>
  );
}

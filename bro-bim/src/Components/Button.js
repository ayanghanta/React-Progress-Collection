export default function Button({ children, color, onClick }) {
  return (
    <button className={`btn ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

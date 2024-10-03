import { Link } from "react-router-dom";

function Button({ children, type, to, onClick, disabled }) {
  const base =
    " rounded-full disabled:cursor-not-allowed transition duration-300 text-sm uppercase outline-none focus:ring focus:ring-offset-2 ";

  const style = {
    primary:
      base +
      "px-4 py-2 text-slate-50 bg-rose-500 hover:bg-rose-600 ring-rose-400",

    round:
      base +
      "px-2.5 py-1 md:py-2 md:px-3.5 text-slate-800 bg-rose-500 hover:bg-rose-600 ring-rose-400",
    secondary:
      base +
      "border border-slate-300 hover:bg-slate-400 ring-slate-400 px-4 py-2 text-slate-400 hover:text-slate-800",
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={style[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

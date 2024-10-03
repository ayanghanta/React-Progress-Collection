import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPrice, getItems, getTotalCakes } from "./cartSlice";
import { formatCurrency } from "../../utils/helper";

function CartOverview() {
  const totalItem = useSelector(getTotalCakes);
  const totalCartPrice = useSelector(getCartPrice);

  if (totalItem === 0) return null;

  return (
    <div className="bg-slate-800 px-4 py-4 flex items-center justify-between">
      <div className="text-sm text-slate-400 font-semibold flex space-x-2 sm:text-base">
        <p>{totalItem} Cakes</p>
        <p> {formatCurrency(totalCartPrice)}</p>
      </div>

      <p className="text-slate-300 font-bold">
        <Link to="/cart">Open cart &rarr;</Link>
      </p>
    </div>
  );
}

export default CartOverview;

import { formatCurrency } from "../../utils/helper";
import CartModify from "./CartModify";

function CartItem({ item }) {
  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p className="text-slate-700">
          {item.quantity} x {item.name}
        </p>
        <p className="text-sm font-semibold text-slate-500">
          {formatCurrency(item.itemsPrice)}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <CartModify cakeId={item._id} cakeQuantity={item.quantity} />
      </div>
    </li>
  );
}

export default CartItem;

import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getItems } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { userName } = useSelector((store) => store.user);

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="mt-4">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 transition duration-300 hover:underline"
      >
        &larr; back to menu
      </Link>

      <p className="text-xl mt-6 font-semibold text-slate-600 ">
        Your cart, {userName}
      </p>

      <ul className="mt-8 divide-y border-b">
        {items.map((item) => (
          <CartItem item={item} key={item.name} />
        ))}
      </ul>

      <div className="mt-12 space-x-3">
        <Button type="primary" to="/order/new">
          Place Order
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

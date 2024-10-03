import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helper";
import { addItem, getItems } from "../cart/cartSlice";
import CartModify from "../cart/CartModify";

function MenuItem({ cake }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(getItems);

  const isInCart = cartItems.some((item) => item._id === cake._id);

  const itemQuantity = cartItems.find(
    (item) => item._id === cake._id
  )?.quantity;

  function handleAddItem() {
    const item = {
      ...cake,
      quantity: 1,
      itemsPrice: cake.price * 1,
    };
    dispatch(addItem(item));
  }

  return (
    <li className="flex py-2 gap-4 items-start">
      <img
        src={`https://cake-rush-api-2.onrender.com${cake.image}`}
        alt={`image of ${cake.name}`}
        className="w-28"
      />
      <div className="flex grow flex-col pt-0.5">
        <h2 className="sm:text-lg font-semibold text-slate-800">{cake.name}</h2>
        <p className="italic text-slate-500 text-xs sm:text-sm">
          {cake.ingredients.join(", ")}
        </p>

        <div className="mt-auto sm:flex sm:items-center sm:justify-between">
          <p className="text-slate-700 mt-3 sm:mt-0 mb-2 sm:mb-0">
            {formatCurrency(cake.price)}
          </p>

          {isInCart ? (
            <CartModify cakeId={cake._id} cakeQuantity={itemQuantity} />
          ) : (
            <Button type="primary" onClick={handleAddItem}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

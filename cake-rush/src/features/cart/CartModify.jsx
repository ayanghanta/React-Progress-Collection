import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, deleteItem, increaseItem } from "./cartSlice";

function CartModify({ cakeId, cakeQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-8 md:gap-12">
      <div className="flex items-center gap-1">
        <Button type="round" onClick={() => dispatch(decreaseItem(cakeId))}>
          -
        </Button>
        <span>{cakeQuantity}</span>
        <Button type="round" onClick={() => dispatch(increaseItem(cakeId))}>
          +
        </Button>
      </div>
      <Button type="primary" onClick={() => dispatch(deleteItem(cakeId))}>
        Delete
      </Button>
    </div>
  );
}

export default CartModify;

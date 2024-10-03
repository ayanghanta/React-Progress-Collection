import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { Form, redirect, useNavigation } from "react-router-dom";
import { getCartPrice, getItems } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { createOrder } from "../../services/apiCakeRush";
import { formatCurrency } from "./../../utils/helper";
import { useState } from "react";

function CreateOrder() {
  const [isPriority, setIsPriority] = useState(false);

  const { userName } = useSelector((store) => store.user);
  const cartItems = useSelector(getItems);
  const cartPrice = useSelector(getCartPrice);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="mt-8">
      <p className="text-xl font-semibold text-slate-700">
        Ready to order? Let&apos;s go!
      </p>
      <Form method="POST">
        <div className="flex items-center gap-3 mb-5 mt-8">
          <label htmlFor="name" className="basis-32 sm:basis-40">
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="userName"
            className="input grow"
            defaultValue={userName}
            required
          />
        </div>

        <div className="flex items-center gap-3 mb-5">
          <label htmlFor="phone" className="basis-32 sm:basis-40">
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="input grow"
            required
          />
        </div>

        <div className="flex items-center gap-3 mb-5 relative">
          <label htmlFor="address" className="basis-32 sm:basis-40">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="input grow"
            required
          />

          <button className="absolute right-0.5 md:1 bg-blue-400 px-2 py-1.5 rounded-full hover:bg-blue-500 transition duration-300">
            Get Location
          </button>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
            className="input h-5 w-5 accent-rose-500"
          />
          <label htmlFor="priority">
            Want to you give your order priority?
          </label>
        </div>

        <input type="hidden" name="items" value={JSON.stringify(cartItems)} />

        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting
            ? "Placing Order..."
            : `Order for ${formatCurrency(
                isPriority ? cartPrice + cartPrice * 0.2 : cartPrice
              )}`}
        </Button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);

  const order = {
    ...data,
    items: JSON.parse(data.items),
    priority: data.priority === "true",
  };

  const newOrder = await createOrder(order);
  const { orderId } = newOrder.data.order;

  return redirect(`/order/${orderId}`);
}

export default CreateOrder;

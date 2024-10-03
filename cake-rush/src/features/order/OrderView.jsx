import { useLoaderData, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiCakeRush";
import {
  calcDeliveryTime,
  calcOrderStatus,
  formatCurrency,
  formatDate,
} from "../../utils/helper";
import OrderItem from "./OrderItem";

function OrderView() {
  const data = useLoaderData();
  const { orderId } = useParams();

  if (data.length === 0)
    return (
      <p className="text-center mt-16 text-lg font-semibold text-slate-500">
        There is No order with ID {orderId} :(
      </p>
    );

  const order = data.at(0);

  // HVMWGH // RpY8Nc // 888fLN
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-8">
        <p className="text-xl font-semibold text-slate-700">
          Order #{orderId} status
        </p>
        <div className="flex items-center gap-2">
          {order.priority && (
            <p className="bg-rose-400 text-slate-50 px-2 py-1 rounded-full uppercase">
              priority
            </p>
          )}
          <p className="bg-green-500 text-slate-50 px-2 py-1 rounded-full uppercase">
            {calcOrderStatus(order.deliveryTime)}
          </p>
        </div>
      </div>
      <div className="px-4 py-8 bg-slate-200 flex items-center justify-between mb-8">
        <p className="font-semibold text-slate-800">
          {calcDeliveryTime(order.deliveryTime)}
        </p>
        <p className="text-xs md:text:sm text-slate-500">
          (Estimted delivery: {formatDate(order.deliveryTime)})
        </p>
      </div>

      <ul className="flex flex-col divide-y border-t border-b">
        {order.items.map((item) => (
          <OrderItem item={item} key={item._id} />
        ))}
      </ul>

      <div className="mt-8 bg-slate-200 p-4 mb-4">
        <p className="text-sm text-slate-600 mb-2">
          Price of Cakes: {formatCurrency(order.totalItemsPrice)}
        </p>
        <p className="text-sm text-slate-600 mb-2">
          Price of priority:{" "}
          {order.priority
            ? formatCurrency(order.totalItemsPrice * 0.2)
            : formatCurrency(0)}
        </p>
        <p className="font-semibold text-slate-700">
          Total cash on delivary: {formatCurrency(order.totalBill)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  return order;
}

export default OrderView;

import { formatCurrency } from "../../utils/helper"

function OrderItem({item}) {
  return (
    <li className="flex flex-col py-3">
      <div className="flex items-center text-slate-800 justify-between">
        <p className="text-sm mb-1">
         <span className="font-semibold">{item.quantity}</span>  x {item.name}</p>
        <p className="font-semibold text-slate-800 text-sm">{formatCurrency(item.price*item.quantity)}</p>
      </div>
      <p className="text-sm italic text-slate-500">{item.ingredients.join(', ')}</p>
    </li>
  )
}

export default OrderItem

import { Link } from "react-router-dom"

function CartOverview() {
  return (
    <div className="bg-slate-800 px-4 py-4 flex items-center justify-between">

      <div className="text-sm text-slate-400 font-semibold flex space-x-2 sm:text-base">
        <p>7 Cakes</p>
        <p> $23.70</p>
      </div>

      <p className="text-slate-300 font-bold">
        <Link to='/cart'>Cart &rarr;</Link>
      </p>
      
    </div>
  )
}

export default CartOverview

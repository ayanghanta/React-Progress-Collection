import { Link } from "react-router-dom"
import ShowUser from "../features/user/ShowUser"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
  return (
    <header className="bg-rose-500 flex sm:px-4 sm:py-2 px-2 py-2 items-center justify-between">
       <p className="text-xl sm:text-2xl uppercase text-slate-50 tracking-widest">
       <Link to='/'>
       Cake Rush</Link></p>
       <SearchOrder/>
       <ShowUser/>
      </header>
  )
}

export default Header

import { Outlet } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      
      <Header/>
      
      <main className="overflow-y-scroll bg-slate-50">
        <Outlet/>
      </main>

        <CartOverview/>

    </div>
  )
}

export default AppLayout

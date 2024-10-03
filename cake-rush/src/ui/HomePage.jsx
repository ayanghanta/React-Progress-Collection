import CreateUser from "../features/user/CreateUser"
import Button from "./Button"

function HomePage() {
  return (
    <div className="mt-10 sm:mt-16">
      <h1 className="font-bold text-lg text-rose-500 text-center sm:text-2xl">Delicious Cakes Delivered to Your Doorstep</h1>
      <p className="italic text-sm text-center text-slate-500 mt-2  sm:text-base">Freshly baked, handcrafted cakes delivered with care. Perfect for any occasion.</p>
      <div className="mt-8 sm:mt-14 flex flex-col items-center justify-center">
        
        <CreateUser/>
      </div>
    </div>
  )
}

export default HomePage

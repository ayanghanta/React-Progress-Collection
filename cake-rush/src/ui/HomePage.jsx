function HomePage() {
  return (
    <div className="px-3 mt-10 sm:mt-16">
      <h1 className="font-bold text-lg text-rose-500 text-center sm:text-2xl">Delicious Cakes Delivered to Your Doorstep</h1>
      <p className="italic text-sm text-center text-slate-500 mt-2  sm:text-base">Freshly baked, handcrafted cakes delivered with care. Perfect for any occasion.</p>
      <div className="mt-8 sm:mt-14 flex flex-col items-center justify-center">
        <p className="text-sm sm:text-base text-slate-700 text-center mb-2">👋Hey There! Let’s Get Started with Your Name</p>
        <input type="text" className="px-2.5 py-2 rounded-full border border-slate-200 outline-none focus:ring ring-rose-300 transition duration-300 mt-2 w-72 mb-4" placeholder="Your Name" />

      <button className="px-4 py-2 font-semibold bg-rose-500 rounded-full text-slate-800 hover:bg-rose-600 transition duration-300">Let&apos;s Start</button>
      </div>
    </div>
  )
}

export default HomePage

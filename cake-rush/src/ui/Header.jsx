function Header() {
  return (
    <header className="bg-rose-500 flex sm:px-4 sm:py-5 px-2 py-3 items-center justify-between">
       <p className="text-xl sm:text-3xl uppercase text-slate-50">Cake Rush</p>
       <input type="text" className="bg-rose-100 rounded-full px-2 py-1 placeholder:text-slate-500 outline-none focus:ring-2 ring-rose-300 sm:w-52 w-32 text-xs focus:scale-x-105 transition duration-300 sm:text-sm md:text-base border border-rose-400" placeholder="Search order #" />
       <p className="text-lg font-semibold text-slate-200 hidden sm:block">Ayan</p>
      </header>
  )
}

export default Header

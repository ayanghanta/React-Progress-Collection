import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {

  const[query,setQuery]=useState('')
  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    navigate(`/order/${query.trim()}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="bg-rose-300 rounded-full px-2 py-2 placeholder:text-slate-500 outline-none focus:ring-2 ring-rose-300 sm:w-52 w-32 text-xs focus:scale-x-105 transition duration-300 sm:text-sm md:text-base border border-rose-400" placeholder="Search order #" value={query} onChange={(e)=>setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder

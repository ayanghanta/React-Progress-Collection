import { useState } from "react"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import {createUser} from '../user/userSlice'
import { useNavigate } from "react-router-dom"
function CreateUser() {
  const [name,setName]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {userName}=useSelector(store=>store.user)

  function handleSubmit(e){
    e.preventDefault()
    dispatch(createUser(name.trim()))
    navigate('/menu')

  }

  if(userName) return <Button type='primary' to='/menu'>Continue Ordering, {userName}</Button>

  return (
    <>
    <p className="text-sm sm:text-base text-slate-700 text-center mb-2">👋Hey There! Let’s Get Started with Your Name</p>
    <form className="flex flex-col items-center" onSubmit={handleSubmit} >

      <input type="text" className="px-2.5 py-2 rounded-full border border-slate-200 outline-none focus:ring ring-rose-400 transition duration-300 mt-2 w-72 mb-4" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />

      {name.trim() && <Button type='primary' >Let&apos;s Start</Button>}
    </form>
    </>
  )
}

export default CreateUser

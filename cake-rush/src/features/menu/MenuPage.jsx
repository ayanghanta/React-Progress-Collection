import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../services/apiCakeRush"
import MenuItem from "./MenuItem"

function MenuPage() {
  const data=useLoaderData()
  const menu=data.data.cakes
  return (
      <ul className="divide-y divide-rose-100">
      {menu.map(cake=><MenuItem cake={cake} key={cake._id} />)}
      </ul>
  )
}

export async function loader(){
  const menu =await getMenu()

  return menu
}

export default MenuPage

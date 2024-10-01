import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error=useRouteError()
  return (
    <div>
      <p className="text-red-700 text-2xl text-center mt-36">Some thing went wrong !</p>
      <p className="text-orange-400 text-center mt-2">{error.message || error.data}</p>
      <p className="text-center mt-4">

      <Link to='/' className="text-blue-500 hover:blue-600 transition duration-300">&larr;Back to Home</Link>
      </p>
    </div>
  )
}

export default ErrorPage

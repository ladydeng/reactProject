import { createBrowserRouter } from "react-router-dom"

import Home from "../views/index/index"
import Login from "../views/login/login"
import ErrorPage from "../views/errorPage/errorPage"

const routes = [
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>
  }
]

const router = createBrowserRouter(routes)
export default router

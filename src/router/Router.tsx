import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { History } from "../pages/history/History"
import { DefaultLayouts } from "../layouts/DefaultLayouts"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayouts /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/history" element={ <History /> } />
      </Route>
    </Routes>
  )
}


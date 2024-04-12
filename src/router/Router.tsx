import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { History } from "../pages/history/History"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/history" element={<History />}></Route>
    </Routes>
  )
}


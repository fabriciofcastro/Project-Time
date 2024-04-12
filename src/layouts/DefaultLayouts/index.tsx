import { Outlet } from "react-router-dom"
import { Header } from "../../components/header"
import { LayoutContainer } from "./style"

export const DefaultLayouts = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer >
  )
}


import { HeaderContainer, Img } from "./Header.style"
import logo from '../../assets/logo1.png'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} alt="Logo" />
      <nav>
        <NavLink to="/" title="Timer"><Timer size={24}  /></NavLink>
        <NavLink to="history" title="Histórico"><Scroll size={24} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}

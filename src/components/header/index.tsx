import { HeaderContainer, Img } from "./Header.style"
import logo from '../../assets/logo1.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <Img src={logo} alt="Logo" />
      <nav>
        <a href="#">Timer</a>
        <a href="#">History</a>
      </nav>
    </HeaderContainer>
  )
}

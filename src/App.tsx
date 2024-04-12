import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./styles/themes/ThemesDefault"
import { GlobalStyle } from "./styles/global"
import { Router } from "./router/Router"
import { BrowserRouter } from "react-router-dom"

export function App() {
  
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}



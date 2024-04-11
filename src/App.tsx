import { ThemeProvider } from "styled-components";
import { Button } from "./Button/Button";
import { defaultThemes } from "./styles/themes/ThemesDefault";
import { GlobalStyle } from "./styles/global";



export function App() {
  
  return (
    <ThemeProvider theme={defaultThemes}>

      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success' />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}



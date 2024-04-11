import { ThemeProvider } from "styled-components";
import { Button } from "./Button/Button";
import { defaultThemes } from "./styles/themes/ThemesDefault";



export function App() {
  
  return (
    <ThemeProvider theme={defaultThemes}>
      <Button color='primary' />
      <Button color='secondary' />
      <Button color='danger' />
      <Button color='success' />
      <Button />


    </ThemeProvider>
  )
}



import 'styled-components'
import { defaultThemes } from '../styles/themes/ThemesDefault'

type ThemeType = typeof defaultThemes

declare module 'styled-components' {
  export interface defaultThemes extends ThemeType {}
}
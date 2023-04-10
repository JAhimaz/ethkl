import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider, Theme } from '@emotion/react'
import { createContext, PropsWithChildren, useContext } from 'react'

declare module '@emotion/react' {
  export interface Theme {
    background: string
    text: {
      white: string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
    }
  }
}

export const mainTheme: Theme = {
  background: '#030303',
  text: {
    white: '#F3F3F3',
  },
  colors : {
    primary: '#CF2027',
    secondary: '#202859',
    tertiary: '#FFC928'
  }
}

const Context = createContext({})

export const useTheme = () => useContext(Context)

const emotionCache = createCache({ key: 'emotion-css'})
emotionCache.compat = true

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={mainTheme}>
      {children}
    </ThemeProvider>
  </CacheProvider>
)

export default Provider

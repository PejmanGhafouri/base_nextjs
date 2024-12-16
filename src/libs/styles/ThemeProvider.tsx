'use client'
// eslint-disable-next-line no-restricted-imports
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

import {type ReactNode, useMemo} from 'react'
import Rtl from './Rtl'
import useDynamicTheme from './useThemeGenerator'
import {Fonts} from './Font'

interface Props {
  children: ReactNode
}

export default function ThemeProvider({children}: Readonly<Props>) {
  const dynamicTheme = useDynamicTheme()
  const theme = useMemo(() => createTheme(dynamicTheme), [dynamicTheme])
  return (
    <Rtl>
      <Fonts />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </Rtl>
  )
}

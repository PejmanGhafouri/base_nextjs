import {useMemo} from 'react'
import useThemeModeStore from '@libs/uiHooks/useThemeModeStore'
import {type PaletteProps} from './interfaces'
// eslint-disable-next-line no-restricted-imports
import {createTheme} from '@mui/material/styles'
import {type Theme} from '@libs/styles/styled'

const insPalette: PaletteProps = {
  primary: {
    main: '#3B82F6',
    light: '#EFF6FF',
    dark: '#1E3A8A',
    contrastText: '#fff',
  },
  warning: {
    main: '#FACC15',
    light: '#FEFCE8',
    dark: '#A16207',
    contrastText: '#fff',
  },
  error: {
    main: '#EF4444',
    light: '#FEF2F2',
    dark: '#DC2626',
    contrastText: '#fff',
  },
  success: {
    main: '#16A34A',
    light: '#F0FDF4',
    dark: '#14532D',
    contrastText: '#fff',
  },
  secondary: {
    main: '#D1D5DB',
    light: '#DBEAFE',
    dark: '#D1D5DB',
    contrastText: '#fff',
  },
  info: {
    main: '#DBEAFE',
    light: '#93C5FD',
    dark: '#1E3A8A',
    contrastText: '#fff',
  },
}

interface Props {
  mode?: 'light' | 'dark'
  direction?: 'rtl' | 'ltr'
}

const useDynamicTheme = ({direction = 'rtl'}: Props = {}) => {
  const {mode} = useThemeModeStore()
  const defaultTheme = createTheme()

  const theme = useMemo(() => {
    return {
      typography: {
        fontFamily: 'IRANYekan,sans-serif',
      },
      tj: {
        formItemHeight: 38,
        gray: {
          g50: '#F9FAFB',
          g100: '#F3F4F6',
          g200: '#E5E7EB',
          g500: '#6B7280',
          g700: '#374151',
          g800: '#1F2937',
        },
      },
      direction,
      palette: {
        mode,
        ...insPalette,
        text: {
          primary: '#111827',
        },
        blue: {
          400: '#60A5FA',
        },
      },
      shadows: [
        'none',
        '0px 1px 3px 0px rgba(16, 24, 40, 0.1)',
        '0px 12px 16px -4px #10182814',
        ...defaultTheme.shadows.slice(3),
      ] as Theme['shadows'],
    }
  }, [direction, mode, defaultTheme.shadows])

  return theme
}

export default useDynamicTheme

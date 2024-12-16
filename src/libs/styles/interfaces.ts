// eslint-disable-next-line no-restricted-imports
import type {Theme} from '@mui/material/styles'

export interface PaletteProps {
  primary: Theme['palette']['primary']
  secondary: Theme['palette']['secondary']
  warning: Theme['palette']['warning']
  error: Theme['palette']['error']
  success: Theme['palette']['success']
  info: Theme['palette']['info']
}

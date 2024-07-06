import { createTheme } from '@mui/material'
import { lightGreen } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    difficulty: {
      easy: string
      normal: string
      challenging: string
      hard: string
      expert: string
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    difficulty?: {
      easy?: string
      normal?: string
      challenging?: string
      hard?: string
      expert?: string
    }
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    status: true
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: lightGreen[900], contrastText: '#fff' },
    difficulty: {
      easy: '#6B8E23',
      normal: '#D2B48C',
      challenging: '#DAA520',
      hard: '#CD853F',
      expert: '#B22222'
    }
  }
})

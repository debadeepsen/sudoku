'use client'

import Game from '@/components/Game'
import { ThemeProvider, createTheme } from '@mui/material'
import { cyan, green, lightBlue, lightGreen, teal } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: { main: lightGreen[900], contrastText: '#fff' }
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        {/* <div className='text-center'>
        <h1>Sudoku Game</h1>
        <p>Coming Soon!</p>
      </div> */}
        <Game />
      </main>
    </ThemeProvider>
  )
}

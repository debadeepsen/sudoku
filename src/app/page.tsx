'use client'

import Game from '@/components/Game'
import { theme } from '@/lib/theme'
import { ThemeProvider } from '@mui/material'

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

'use client'

import Game from '@/components/Game'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <div className='text-center'>
        <h1>Sudoku Game</h1>
        <p>Coming Soon!</p>
      </div> */}
      <Game />
    </main>
  )
}

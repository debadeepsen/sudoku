import { generateSudokuBoard } from '@/app/server-actions/actions'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Game = () => {
  const [sudoku, setSudoku] = useState<any | null>(null)

  const loadData = async () => {
    const data = await generateSudokuBoard(20)
    setSudoku(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Box className='rounded-sm border bg-zinc-800 w-[65vw] max-w-[1000px]'>
      <pre>{JSON.stringify(sudoku, null, 2)}</pre>
    </Box>
  )
}

export default Game

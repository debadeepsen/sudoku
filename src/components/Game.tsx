import api from '@/api/api'
import { Board, generateSudokuBoard } from '@/lib/generator'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Game = () => {
  const [sudoku, setSudoku] = useState<any|null>(null)

  const loadData = () => {
    const data = generateSudokuBoard(20)
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

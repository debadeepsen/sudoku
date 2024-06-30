import api from '@/api/api'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Game = () => {
  const [sudoku, setSudoku] = useState()

  const loadData = async () => {
    const data = await api.getNewBoardWithSolution()
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

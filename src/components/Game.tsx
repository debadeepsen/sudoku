import { generateSudokuBoard } from '@/app/server-actions/actions'
import { Board, emptyBoard } from '@/lib/generator'
import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Borders from './Borders'
import { GridOn, GridOnOutlined } from '@mui/icons-material'

const Game = () => {
  const [sudoku, setSudoku] = useState<{
    puzzle: Board
    solution: Board
  } | null>({
    puzzle: emptyBoard,
    solution: emptyBoard
  })

  const loadData = async () => {
    const data = await generateSudokuBoard(20)
    setSudoku(data)
  }

  useEffect(() => {
    // loadData()
  }, [])

  return (
    <Box className='rounded-md shadow-lg dark:shadow-black/30 border bg-white dark:bg-forest-800 w-[75vw] max-w-[1000px] p-6 box-border'>
      {/* <pre>{JSON.stringify(sudoku, null, 2)}</pre> */}
      <Box className='flex flex-col lg:flex-row'>
        <Box className='bg-zinc-900/20 dark:bg-zinc-300/20 p-[1px] box-border'>
          {sudoku?.puzzle.map((row, r) => {
            return (
              <Box className='flex' key={r}>
                {row.map((val, c) => {
                  return (
                    <button
                      key={c}
                      className='flex justify-center items-center w-[48px] h-[48px] border border-solid border-zinc-500/30 box-border hover:bg-forest-500/20 text-base text-forest-700 dark:text-forest-100 bg-white dark:bg-forest-800'
                    >
                      {val || ''}
                    </button>
                  )
                })}
              </Box>
            )
          })}
        </Box>
        {sudoku?.puzzle && <Borders />}
        <Box className='px-4'>
          <Button variant='contained' startIcon={<GridOnOutlined />} onClick={loadData}>
            New Game
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Game

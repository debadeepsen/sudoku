import { generateSudokuBoard } from '@/app/server-actions/actions'
import { Board } from '@/lib/generator'
import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Game = () => {
  const [sudoku, setSudoku] = useState<{
    puzzle: Board
    solution: Board
  } | null>(null)

  const loadData = async () => {
    const data = await generateSudokuBoard(20)
    setSudoku(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Box className='rounded-md shadow-lg dark:shadow-black/30 border bg-white dark:bg-forest-800 w-[75vw] p-6 box-border'>
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
        <Box className='absolute pointer-events-none'>
          {[0, 1, 2].map(i => (
            <Box
              key={i}
              className='w-[432px] h-[144px] box-border border-b-zinc-950 dark:border-b-zinc-200'
              position={'relative'}
              top={1}
              borderBottom={i === 2 ? 0 : '2px solid'}
            ></Box>
          ))}
        </Box>
        <Box className='absolute flex pointer-events-none'>
          {[0, 1, 2].map(i => (
            <Box
              key={i}
              className='w-[144px] h-[432px] box-border border-r-zinc-950 dark:border-r-zinc-200'
              position={'relative'}
              left={1}
              top={1}
              borderRight={i === 2 ? 0 : '2px solid'}
            ></Box>
          ))}
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default Game

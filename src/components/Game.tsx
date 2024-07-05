import { generateSudokuBoard } from '@/app/server-actions/actions'
import { Board, emptyBoard } from '@/lib/generator'
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Popover,
  Typography
} from '@mui/material'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import Borders from './Borders'
import { Expand, ExpandMore, GridOn, GridOnOutlined } from '@mui/icons-material'

const Game = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [sudoku, setSudoku] = useState({
    puzzle: emptyBoard,
    solution: emptyBoard
  })

  const loadData = async () => {
    const data = await generateSudokuBoard(20)
    setSudoku(data)
  }

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

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
          <ButtonGroup variant='contained'>
            <Button startIcon={<GridOnOutlined />} onClick={loadData}>
              New Game
            </Button>
            <Button size='small' onClick={handleMenuOpen}>
              <ExpandMore sx={{ fontSize: 18 }} />
            </Button>
          </ButtonGroup>{' '}
          <Popover
            id='difficulty-popover'
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </Box>
      </Box>
    </Box>
  )
}

export default Game

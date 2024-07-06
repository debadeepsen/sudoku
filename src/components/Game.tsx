import { emptyBoard, generateSudokuBoard } from '@/lib/generator'
import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  Slider,
  Tooltip,
  Typography
} from '@mui/material'
import React, { MouseEvent, useEffect, useState } from 'react'
import Borders from './Borders'
import { ExpandMore, GridOnOutlined } from '@mui/icons-material'
import {
  Difficulty,
  defaultDifficulty,
  difficultyColors,
  difficultyLevels
} from '@/lib/constants'
import { getNumericDifficulty } from '@/lib/lib'
import DifficultyPicker from './DifficultyPicker'
import Dot from './Dot'

const Game = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [sudoku, setSudoku] = useState({
    puzzle: emptyBoard,
    solution: emptyBoard
  })
  const [difficultyLabel, setDifficultyLabel] =
    useState<Difficulty>(defaultDifficulty)
  const [currentDifficultyLabel, setCurrentDifficultyLabel] =
    useState<Difficulty>(defaultDifficulty)
  const numericDifficulty = getNumericDifficulty(difficultyLabel)

  const handleDifficultyChange = (val: number) => {
    const label = difficultyLevels[val] as Difficulty
    setDifficultyLabel(label)
  }

  const loadData = async () => {
    const data = await generateSudokuBoard(numericDifficulty)
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
            <Tooltip title={`Start a new game in ${difficultyLabel} mode`}>
              <Button startIcon={<GridOnOutlined />} onClick={loadData}>
                <Typography component={'span'} mr={2}>
                  New Game
                </Typography>
                <Dot color={difficultyColors[difficultyLabel]} />
              </Button>
            </Tooltip>
            <Tooltip title={'Change difficulty'}>
              <Button size='small' onClick={handleMenuOpen}>
                <ExpandMore sx={{ fontSize: 18 }} />
              </Button>
            </Tooltip>
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
            <Box className='p-4 min-w-[200px] min-h-[100px] flex flex-col justify-center items-center'>
              <Typography component={'h2'}>Difficulty</Typography>
              <Box className='mt-2 w-full'>
                {/* <Slider
                  value={numericDifficulty}
                  onChange={(_, val) => handleDifficultyChange(val as number)}
                  // step={1}
                  min={0}
                  max={5}
                  valueLabelDisplay='off'
                /> */}
                <DifficultyPicker
                  currentDifficulty={difficultyLabel}
                  onDifficultyChange={val => {
                    setAnchorEl(null)
                    setDifficultyLabel(val)
                  }}
                />
              </Box>
            </Box>
          </Popover>
        </Box>
      </Box>
    </Box>
  )
}

export default Game

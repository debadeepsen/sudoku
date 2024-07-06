export type Board = number[][]

// Function to shuffle an array
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Function to create an empty board
export const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(0))

const createEmptyBoard = () => emptyBoard

// Function to check if a number can be placed in a given cell
const isValidPlacement = (
  board: Board,
  row: number,
  col: number,
  num: number
): boolean => {
  const isValidInRow = !board[row].includes(num)
  const isValidInCol = !board.some(row => row[col] === num)
  const subGridRow = Math.floor(row / 3) * 3
  const subGridCol = Math.floor(col / 3) * 3

  const isValidInSubGrid = !board
    .slice(subGridRow, subGridRow + 3)
    .some(subGridRow =>
      subGridRow.slice(subGridCol, subGridCol + 3).includes(num)
    )

  return isValidInRow && isValidInCol && isValidInSubGrid
}

// Function to find the next empty cell
const findEmptyCell = (board: Board): [number, number] | null => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col]
      }
    }
  }
  return null
}

// Recursive function to solve the board
const solveBoard = (board: Board) => {
  const cell = findEmptyCell(board)
  if (!cell) return true // No empty cell, board is solved

  const [row, col] = cell
  const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

  for (const num of numbers) {
    if (isValidPlacement(board, row, col, num)) {
      board[row][col] = num
      if (solveBoard(board)) return true
      board[row][col] = 0
    }
  }
  return false
}

// Function to generate a completed Sudoku board
export const generateCompletedBoard = () => {
  const board = createEmptyBoard()
  solveBoard(board)
  return board
}

// Function to remove numbers from the board to create a puzzle
export const createSudokuPuzzle = (board: Board, difficulty: number) => {
  const puzzle = board.map(row => [...row])
  let attempts = difficulty

  while (attempts > 0) {
    const row = Math.floor(Math.random() * 9)
    const col = Math.floor(Math.random() * 9)

    if (puzzle[row][col] !== 0) {
      const backup = puzzle[row][col]
      puzzle[row][col] = 0

      const boardCopy = puzzle.map(row => [...row])
      if (!solveBoard(boardCopy)) {
        puzzle[row][col] = backup
      } else {
        attempts--
      }
    }
  }

  return puzzle
}

// Function to generate a Sudoku board with a given difficulty
export const generateSudokuBoard = async (difficulty: number) => {
  const solution = generateCompletedBoard()
  const puzzle = createSudokuPuzzle(solution, difficulty)

  return {
    puzzle,
    solution
  }
}

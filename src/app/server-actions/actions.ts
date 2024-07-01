'use server'

import { createSudokuPuzzle, generateCompletedBoard } from '@/lib/generator'

// Function to generate a Sudoku board with a given difficulty
export const generateSudokuBoard = async (difficulty: number) => {
  const solution = generateCompletedBoard()
  const puzzle = createSudokuPuzzle(solution, difficulty)

  return {
    puzzle,
    solution
  }
}

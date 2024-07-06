import { Difficulty, difficultyLevels } from './constants'

export const getNumericDifficulty = (difficulty: Difficulty, range = 100) => {
  const difficultyIndex = difficultyLevels.findIndex(e => e === difficulty) + 1
  const step = Math.round(range / 10)
  return difficultyIndex * step
}

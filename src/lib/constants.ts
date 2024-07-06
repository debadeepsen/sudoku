export const defaultDifficulty = 'normal'

export const difficultyLevels = [
  'easy',
  'normal',
  'challenging',
  'hard',
  'expert'
] as const
export type Difficulty = (typeof difficultyLevels)[number]

export const difficultyColors = {
  easy: '#6B8E23',
  normal: '#D2B48C',
  challenging: '#DAA520',
  hard: '#CD853F',
  expert: '#B22222'
}

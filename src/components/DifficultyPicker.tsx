import { Difficulty, difficultyColors, difficultyLevels } from '@/lib/constants'
import { CheckSharp } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

const DifficultyPicker = ({
  currentDifficulty,
  onDifficultyChange
}: {
  currentDifficulty: Difficulty
  onDifficultyChange?: (newDifficulty: Difficulty) => void
}) => {
  return (
    <Box mt={2}>
      {difficultyLevels.map(level => {
        return (
          <Box key={level} mt={1}>
            <Button
              startIcon={level === currentDifficulty ? <CheckSharp /> : null}
              variant='outlined'
              fullWidth
              sx={{
                borderColor: difficultyColors[level],
                color: difficultyColors[level],
                backgroundColor: difficultyColors[level] + '33',
                fontWeight: 400
              }}
              onClick={() => onDifficultyChange?.(level)}
            >
              {level.toUpperCase()}
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}

export default DifficultyPicker

import { Box } from '@mui/material'
import React from 'react'

const Dot = ({ color }: { color: string }) => {
  return <Box className='w-2 h-2 rounded-full' sx={{ background: color }}></Box>
}

export default Dot

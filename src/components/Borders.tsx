import { Box } from '@mui/material'

const Borders = () => {
  return (
    <>
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
    </>
  )
}

export default Borders

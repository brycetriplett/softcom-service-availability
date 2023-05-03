import React from 'react'
import { CircularProgress, Typography, Stack  } from '@mui/material';

const LoadingPage = ({ children }) => {
  return (
    <Stack 
      alignItems='center'
      justifyContent='center'
      sx={{marginTop: '50%'}}
    >
      <Typography component="h4" variant="h5" >{children}</Typography>
      <CircularProgress sx={{marginTop: 5}} />
    </Stack>
  )
}

export default LoadingPage
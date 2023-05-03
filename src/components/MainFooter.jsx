import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material' 


const MainFooter = () => {
  return (
    <Box
        component="footer"
        sx={{
          mt: 3,
          py: 3,
          px: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
            <Typography variant="h6">
            Contact Sales
            </Typography>
            <Typography variant="body1">
            Phone: 800-982-7675 Opt. 2
            </Typography>
            <Typography variant="body1">
            Hours: Mon-Friday 8am-5pm
            </Typography>
            <br/>

            <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
                <Link color="inherit" href="https://www.softcom.net">
                    Softcom Internet Communications
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>
      </Box>
  )
}

export default MainFooter
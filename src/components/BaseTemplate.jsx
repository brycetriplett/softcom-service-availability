import React from 'react'
import { Typography, Box, Container, Avatar } from '@mui/material'
import MainStepper from './MainStepper'
import MainFooter from './MainFooter'


const BaseTemplate = ({ children, activeStep }) => {
  return (
    <>
    <Container component="main" maxWidth="md" sx={{mb:  10}}>
        <Box
            minHeight="100vh"
            sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar 
            alt="Softcom" 
            src="https://www.softcom.net/wp-content/uploads/2016/07/Softcom_Testimonials_2-300x300.jpg"
            sx={{
                width: 75,
                height: 75,
            }}
            />

            <Typography component="h1" variant="h5" sx={{marginTop: 2}}>
                Check Availability
            </Typography>

            <MainStepper activeStep={activeStep}/>
            {children}
        </Box>
    </Container>
    <MainFooter />
    </>
  )
}

export default BaseTemplate
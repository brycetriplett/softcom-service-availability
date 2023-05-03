import React from 'react';
import { StepLabel, Step, Stepper, Box } from '@mui/material';


const steps = [
  'Enter Address',
  'Select A Plan',
  'Order Complete!',
];

const MainStepper = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%', marginTop: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default MainStepper
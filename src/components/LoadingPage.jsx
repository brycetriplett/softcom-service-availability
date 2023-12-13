import React from "react";
import { CircularProgress, Typography, Stack, Divider } from "@mui/material";

const LoadingPage = ({ children }) => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ marginTop: 8 }}>
      <Typography component="h4" variant="h5">
        Checking for service availability....
      </Typography>
      <CircularProgress sx={{ marginTop: 5 }} />
      <Typography variant="subtitle1" sx={{ marginTop: 8 }}>
        {children}
      </Typography>
    </Stack>
  );
};

export default LoadingPage;

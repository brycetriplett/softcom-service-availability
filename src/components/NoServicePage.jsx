import React from "react";
import { BaseTemplate } from "./";
import { Zoom, Typography, Stack, Paper } from "@mui/material";

const NoServicePage = () => {
  return (
    <BaseTemplate activeStep={-1}>
      <Typography variant="h4" sx={{ marginBottom: 7, marginTop: 8 }}>
        Service Unavailable
      </Typography>
      <Zoom in={true}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            margin: "0 auto",
            borderWidth: 1,
          }}
        >
          <Stack
            spacing={2}
            sx={{ m: 4, alignItems: "center", textAlign: "center" }}
          >
            <Typography variant="h5" gutterBottom>
              Service is currently unavailable in your area <br />
              However, we may be able to provide you with service sometime in
              the future! <br />
              Please give our customer service team a call at <br />
              <br />
              <b>800-982-7675 Opt. 2</b> <br />
              <br />
              to inquire about our plans to service your area in the future.
            </Typography>
          </Stack>
        </Paper>
      </Zoom>
    </BaseTemplate>
  );
};

export default NoServicePage;

import React from "react";
import { BaseTemplate } from "./";
import { Zoom, Typography, Stack, Paper, Button } from "@mui/material";

const ErrorPage = () => {
  return (
    <BaseTemplate activeStep={-1}>
      <Typography variant="h4" sx={{ marginBottom: 7, marginTop: 8 }}>
        An Error Has Occurred
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
            spacing={5}
            sx={{ m: 4, alignItems: "center", textAlign: "center" }}
          >
            <Typography variant="h5" gutterBottom>
              Your application was not able to be completed. <br />
              Our technical staff have been alerted of the issue. <br />
              Please give our customer service team a call at <br />
              <br />
              <b>800-982-7675 Opt. 2</b> <br />
              <br />
              to continue inquiring about service.
            </Typography>
            <Button
              color="primary"
              sx={{ float: "right" }}
              href="https://www.softcom.net"
            >
              Return to Homepage
            </Button>
          </Stack>
        </Paper>
      </Zoom>
    </BaseTemplate>
  );
};

export default ErrorPage;

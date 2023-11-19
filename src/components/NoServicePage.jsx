import React from "react";
import { BaseTemplate } from "./";
import { Zoom, Typography, Stack, Paper, Button } from "@mui/material";

const NoServicePage = () => {
  return (
    <BaseTemplate activeStep={-1}>
      <Typography variant="h5" sx={{ marginBottom: 7, marginTop: 8 }}>
        Service Unavailable
      </Typography>
      <Zoom in={true}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            margin: "0 auto",
            borderWidth: 1,
          }}
        >
          <Stack
            spacing={5}
            sx={{ m: 4, alignItems: "center", textAlign: "center" }}
          >
            <Typography variant="subtitle1">
              Thank you for your interest in Softcom's high-speed internet
              services. Unfortunately, we're not in your area just yet, but
              we're constantly expanding our reach. Please call our customer
              service team at <br />
              <h3>
                <b>800-982-7675</b>
              </h3>
              to learn more about our growth plans and when we anticipate being
              able to serve your location. Your connectivity matters to us, and
              we're working hard to bring our top-notch internet services to
              more areas like yours. Stay connected with Softcom for updates and
              be the first to know when we're available in your neighborhood.
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

export default NoServicePage;

import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

const ChosenPrice = ({ tier }) => {
  return (
    <Card
      sx={{
        width: 275,
      }}
    >
      <CardHeader
        title={tier.title}
        titleTypographyProps={{ align: "center" }}
        sx={{
          backgroundColor: (theme) => theme.palette.grey[300],
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h3" color="text.primary">
            ${tier.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /mo
          </Typography>
        </Box>
        <ul>
          {tier.description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="left"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChosenPrice;

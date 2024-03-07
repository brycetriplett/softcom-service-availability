import React, { useState } from "react";
import { Grid, Box, TextField, Button, Container } from "@mui/material";

const ContactCard = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailaddress: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="emailaddress"
              label="Email Address"
              name="emailaddress"
              autoComplete="email"
              variant="standard"
              value={formData.emailaddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="phonenumber"
              label="Phone Number"
              type="tel"
              id="phonenumber"
              autoComplete="tel"
              variant="standard"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 6, mb: 2 }}
          disabled={!isFormValid()}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactCard;

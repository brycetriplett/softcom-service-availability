import { Grid, Box, TextField, Button, Container } from "@mui/material";

const ContactCard = ({ handleSubmit }) => {
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
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zipcode"
              name="zipcode"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="emailaddress"
              label="Email Address"
              name="emailaddress"
              autoComplete="email"
              variant="standard"
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
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 6, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactCard;

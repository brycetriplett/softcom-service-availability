import { Paper, Typography, Grid, Button, Container } from "@mui/material";
import ChosenPrice from "./ChosenPrice";

const OrderConfirmation = ({ orderNumber, formData, chosenTier }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Container maxWidth="sm" sx={{ wordWrap: "break-word" }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          margin: "0 auto",
          border: "solid",
          borderColor: "primary.main",
          borderWidth: 1,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Order Number: {orderNumber.match(/\d+/)}
        </Typography>
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 6,
          }}
        >
          <ChosenPrice tier={chosenTier} />
        </Container>
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: { xs: 1, md: 5 },
            paddingRight: { xs: 3, md: 2 },
          }}
        >
          <Grid item xs={6}>
            <Typography variant="button">Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {formData.firstName} {formData.lastName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="button">Phone</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{formData.phonenumber}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="button">Email</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{formData.emailaddress}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="button">Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {formData.address}
              <br />
              {formData.city}, {formData.state} <br />
              {formData.zipcode}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 6,
            marginLeft: 0,
            paddingRight: { md: 4 },
          }}
        >
          <Grid item xs={6}>
            <Button color="primary" onClick={handlePrint}>
              Print Confirmation
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              sx={{ float: "right" }}
              href="https://www.softcom.net"
            >
              Return to Homepage
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OrderConfirmation;

/* global gtag */
import React, { useEffect, useState } from "react";
import { Typography, Zoom, Stack, Divider } from "@mui/material";
import OrderConfirmation from "./OrderConfirmation";
import BaseTemplate from "../BaseTemplate";
import emailjs from "@emailjs/browser";
import ReactPixel from "react-facebook-pixel";

const ConfirmationPage = ({ formData, chosenTier }) => {
  const [emailSent, setEmailSent] = useState({
    template_zz9t4op: false,
    template_nms012o: false,
  });

  let templateParams = {
    name: formData.firstName,
    lastName: formData.lastName,
    address: formData.address,
    address2: formData.address2,
    city: formData.city,
    zipcode: formData.zipcode,
    email: formData.emailaddress,
    plan: chosenTier.title,
    rate: chosenTier.price,
    license: chosenTier.license,
    phonenumber: formData.phonenumber,
  };

  useEffect(() => {
    // Track Lead event when the order is placed
    ReactPixel.track("Lead", {
      content_name: "OrderConfirmation",
      value: chosenTier.price,
      currency: "USD",
    });
  }, [chosenTier.price]);

  useEffect(() => {
    if (!emailSent.template_zz9t4op) {
      emailjs.send(
        "service_vm3rbsi",
        "template_zz9t4op",
        templateParams,
        "2xncjIQ_0IupPvZzO"
      );
      setEmailSent((prev) => ({
        ...prev,
        template_zz9t4op: true,
      }));
    }
    if (!emailSent.template_nms012o) {
      emailjs.send(
        "service_vm3rbsi",
        "template_nms012o",
        templateParams,
        "2xncjIQ_0IupPvZzO"
      );
      setEmailSent((prev) => ({
        ...prev,
        template_nms012o: true,
      }));
    }
  }, [templateParams, emailSent]);

  useEffect(() => {
    console.log("firing conversion event");
    // Fire Google Analytics conversion event
    gtag("event", "conversion", {
      send_to: "AW-872633341/JZDUCLudzK8ZEP2njaAD",
    });
  }, []);

  return (
    <BaseTemplate activeStep={3}>
      <Zoom in={true}>
        <div>
          <Stack spacing={2} sx={{ m: 8, alignItems: "center" }}>
            <Typography variant="h4">
              Thank you for choosing Softcom!
            </Typography>
            <Typography variant="h5" gutterBottom>
              Your order has been successfully placed.
            </Typography>
          </Stack>
          <OrderConfirmation formData={formData} chosenTier={chosenTier} />
          <Divider sx={{ my: 12 }}></Divider>
          <Stack
            spacing={3}
            sx={{ m: 8, alignItems: "center", textAlign: "center" }}
          >
            <Typography variant="subtitle1">
              What Happens Next? Our dedicated customer service team will
              personally reach out to you shortly to schedule your
              installation. We're committed to ensuring a smooth and efficient
              setup process, so you can start enjoying your high-speed
              internet as soon as possible. Need Assistance? If you have any
              questions or need further assistance, feel free to contact us at
            </Typography>
            <Typography variant="h5">
              <b>800-982-7675</b>
            </Typography>
            <Typography variant="subtitle1">
              Our team is here to help! We're excited to welcome you to the
              Softcom community and provide you with an exceptional internet
              experience.
            </Typography>
          </Stack>
        </div>
      </Zoom>
    </BaseTemplate>
  );
};

export default ConfirmationPage;

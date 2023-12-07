import { useState, useEffect } from "react";
import { Typography, Zoom, Stack, Divider } from "@mui/material";

import { towerCoverageAPI, parseResponse } from "../../api";
import LoadingPage from "../LoadingPage";
import OrderConfirmation from "./OrderConfirmation";
import BaseTemplate from "../BaseTemplate";
import emailjs from "@emailjs/browser";

const ConfirmationPage = ({ formData, setPage, chosenTier }) => {
  const [loading, setLoading] = useState(true);
  const [loadTransitionState, setLoadTransitionState] = useState(true);
  const [orderNumber, setOrderNumber] = useState("");

  // send customer info to towercoverage
  useEffect(() => {
    towerCoverageAPI(`EUSsubmisssion`, formData)
      .then((res) => parseResponse(res.data))
      .then((res) => setOrderNumber(res))
      .catch(() => setPage("error"));
  }, []);

  // send customer an email confirmation
  useEffect(() => {
    let templateParams = {
      name: formData.firstName,
      email: formData.emailaddress,
      plan: chosenTier.title,
      rate: chosenTier.price,
      license: chosenTier.license,
    };

    emailjs.send(
      "service_vm3rbsi", //service ID
      "template_rtxfj8m", //template ID
      templateParams, //template parameters
      "2xncjIQ_0IupPvZzO" //public key
    );
  }, []);

  useEffect(() => {
    let timeoutID;

    if (orderNumber.length > 0) {
      timeoutID = setTimeout(() => setLoadTransitionState(false), 1000);
    }

    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [orderNumber]);

  return (
    <BaseTemplate activeStep={3}>
      {loading ? (
        <Zoom in={loadTransitionState} onExited={() => setLoading(false)}>
          <div>
            <LoadingPage>Creating Order..... </LoadingPage>
          </div>
        </Zoom>
      ) : (
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
            <OrderConfirmation
              orderNumber={orderNumber}
              formData={formData}
              chosenTier={chosenTier}
            />
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
      )}
    </BaseTemplate>
  );
};

export default ConfirmationPage;

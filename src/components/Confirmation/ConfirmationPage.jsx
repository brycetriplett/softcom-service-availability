import React, { useEffect, useState } from "react";
import { Typography, Zoom, Stack, Divider } from "@mui/material";
import { towerCoverageAPI, parseResponse } from "../../api";
import LoadingPage from "../LoadingPage";
import OrderConfirmation from "./OrderConfirmation";
import BaseTemplate from "../BaseTemplate";
import emailjs from "@emailjs/browser";
import ReactPixel from "react-facebook-pixel";

const useGoogleTagManager = (id) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [id]);
};

const ConfirmationPage = ({ formData, setPage, chosenTier }) => {
  const [loading, setLoading] = useState(true);
  const [loadTransitionState, setLoadTransitionState] = useState(true);
  const [orderNumber, setOrderNumber] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
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
    const handlePageLoad = () => {
      if (window.location.pathname === "/confirmation") {
        console.log("Made it react");
        window.gtag("event", "conversion", {
          send_to: "AW-872633341/JZDUCLudzK8ZEP2njaAD",
        });
      }
    };

    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (orderNumber === "") {
      // Send customer info to towercoverage
      towerCoverageAPI(`EUSsubmisssion`, formData)
        .then((res) => parseResponse(res.data))
        .then((res) => setOrderNumber(res))
        .then(() => {
          // Track Lead event when the order is successfully placed
          ReactPixel.track("Lead", {
            content_name: "OrderConfirmation", // Replace with appropriate content name
            value: chosenTier.price, // You can adjust the value based on your scenario
            currency: "USD", // Replace with the appropriate currency code
          });

          // Set sendEmail to true after successfully placing the order
          setSendEmail(true);
        })
        .catch(() => setPage("error"));
    }
  }, [orderNumber, formData, setPage]);

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

  useEffect(() => {
    if (sendEmail) {
      if (!emailSent.template_zz9t4op) {
        emailjs.send(
          "service_vm3rbsi", // service ID
          "template_zz9t4op", // template ID
          templateParams, // template parameters
          "2xncjIQ_0IupPvZzO" // public key
        );
        setEmailSent((prev) => ({
          ...prev,
          template_zz9t4op: true,
        }));
      }
      if (!emailSent.template_nms012o) {
        emailjs.send(
          "service_vm3rbsi", // service ID
          "template_nms012o", // template ID
          templateParams, // template parameters
          "2xncjIQ_0IupPvZzO" // public key
        );
        setEmailSent((prev) => ({
          ...prev,
          template_nms012o: true,
        }));
      }
    }
  }, [sendEmail, templateParams, emailSent]);

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

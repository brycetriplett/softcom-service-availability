import { useEffect, useState } from "react";
import { Zoom, Stack, Typography, Grid, Divider } from "@mui/material";
import { useHistory } from "react-router-dom";

import PriceCard from "./PriceCard";
import LoadingPage from "../LoadingPage";
import BaseTemplate from "../BaseTemplate";
import findMaxPrice from "./findMaxPrice";

const PricePage = ({ formData, setFormData, setChosenTier }) => {
  const [loadTransitionState, setLoadTransitionState] = useState(true);
  const [mainTransitionState, setMainTransitionState] = useState(true);
  const [tierList, setTierList] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    console.log("we made it here");
    findMaxPrice(formData)
      .then((res) => {
        if (Object.keys(res).length === 0) {
          history.push("noService");
        } else {
          setTierList(res);
        }
      })
      .catch(() => history.push("error"));
  }, []);

  useEffect(() => {
    let timeoutID;

    if (Object.keys(tierList).length > 0) {
      timeoutID = setTimeout(() => setLoadTransitionState(false), 1000);
    }

    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [tierList]);

  useEffect(() => {
    if (formData.comments) {
      setMainTransitionState(false);
    }
  }, [formData]);

  return (
    <BaseTemplate activeStep={1}>
      {loading ? (
        <Zoom in={loadTransitionState} onExited={() => setLoading(false)}>
          <div>
            <LoadingPage>Checking for service availability....</LoadingPage>
          </div>
        </Zoom>
      ) : (
        <Zoom in={mainTransitionState} onExited={() => history.push("contact")}>
          <div>
            <Stack
              spacing={5}
              sx={{ m: 8, alignItems: "center", textAlign: "center" }}
            >
              <Typography variant="h5">
                Great news! Your location is eligible for Softcom's premier
                high-speed internet services.
              </Typography>
              <Typography variant="h5">
                Check out the available plans:
              </Typography>
            </Stack>
            <Grid
              container
              rowSpacing={5}
              columnSpacing={8}
              alignItems="center"
              justifyContent="center"
            >
              {Object.keys(tierList).map((key) => (
                <PriceCard
                  formData={formData}
                  setFormData={setFormData}
                  setChosenTier={setChosenTier}
                  tier={tierList[key]}
                  key={key}
                />
              ))}
            </Grid>
            <Divider sx={{ my: 12 }}></Divider>
            <Stack
              spacing={5}
              sx={{ m: 8, alignItems: "center", textAlign: "center" }}
            >
              <Typography variant="subtitle1">
                Our plans are designed for those who demand the best in internet
                performance. Ideal for remote work or learning, gaming, or
                high-usage households, we offer consistent, high-speed
                connectivity. Choose your plan and join the Softcom community
                for unparalleled internet quality and speed. Elevate your online
                experience today!
              </Typography>
            </Stack>
          </div>
        </Zoom>
      )}
    </BaseTemplate>
  );
};

export default PricePage;

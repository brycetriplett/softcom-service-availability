import { Fade, Zoom, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { AddressCard, BaseTemplate } from "..";
import { initialFormData } from "../../api";
import { useHistory, useLocation } from "react-router-dom";
//

const AddressPage = ({ formData, setFormData }) => {
  const [transitionState, setTransitionState] = useState(true);
  const history = useHistory();
  const location = useLocation();

  const getQueryParam = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };

  useEffect(() => {
    let params = {
      address: decodeURIComponent(getQueryParam("address")),
      address2: decodeURIComponent(getQueryParam("address2")),
      city: decodeURIComponent(getQueryParam("city")),
      zipcode: decodeURIComponent(getQueryParam("zipcode")),
    };

    let result = { ...initialFormData, ...params };
    setFormData(result);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let result = { ...initialFormData };

    for (const [key, value] of data.entries()) {
      result[key] = value;
    }

    setFormData(result);
  };

  useEffect(() => {
    setTransitionState(false);
  }, [formData]);

  return (
    <Fade in={true}>
      <div>
        <BaseTemplate activeStep={0}>
          <Zoom in={transitionState} onExited={() => history.push("/price")}>
            <div>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: 5, marginTop: 8 }}
              >
                Enter Address
              </Typography>
              <AddressCard handleSubmit={handleSubmit} />
            </div>
          </Zoom>
        </BaseTemplate>
      </div>
    </Fade>
  );
};

export default AddressPage;

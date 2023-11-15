import { Fade, Zoom, Typography } from "@mui/material";
import { useState } from "react";
import { AddressCard, BaseTemplate } from "..";
import { formData } from "../../api";
import { useHistory } from "react-router-dom";
//

const AddressPage = ({ setFormData, setPage }) => {
  const [transitionState, setTransitionState] = useState(true);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let result = { ...formData };

    for (const [key, value] of data.entries()) {
      result[key] = value;
    }

    setFormData(result);
    setTransitionState(false);
  };

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

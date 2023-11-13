import { Fade, Zoom, Typography } from "@mui/material";
import { useState } from "react";
import { ContactCard, BaseTemplate } from "..";
//

const ContactPage = ({ setFormData, formData, setPage }) => {
  const [transitionState, setTransitionState] = useState(true);

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
        <BaseTemplate activeStep={2}>
          <Zoom in={transitionState} onExited={() => setPage("confirmation")}>
            <div>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: 5, marginTop: 8 }}
              >
                Provide Contact Information
              </Typography>
              <ContactCard handleSubmit={handleSubmit} />
            </div>
          </Zoom>
        </BaseTemplate>
      </div>
    </Fade>
  );
};

export default ContactPage;

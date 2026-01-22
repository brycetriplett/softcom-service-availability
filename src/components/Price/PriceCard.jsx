import React, { useEffect } from 'react';
import { Box, Button, Grid, Card, CardHeader, CardContent, CardActions, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const PriceCard = ({ formData, setFormData, setChosenTier, tier }) => {
    
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
      // Check if the script already exists in the document
      if (document.querySelector(`script[src="https://cdn.crowdfiber.io/broadband-consumer-labels/widget.js"]`)) {
        console.log("Widget script already exists.");
        setScriptLoaded(true);
        return;
      }
  
      console.log("Loading widget script...");
      const script = document.createElement("script");
      script.src = "https://cdn.crowdfiber.io/broadband-consumer-labels/widget.js";
      script.defer = true;
      
      script.onload = () => {
        console.log("Broadband widget script loaded.");
        setTimeout(() => {
          console.log("Checking after delay:", window.BroadbandLabelWidget);
          setScriptLoaded(true);
        }, 2000);
      };
  
      script.onerror = () => {
        console.error("Failed to load the broadband widget script.");
      };
  
      document.body.appendChild(script);
    }, []);
  
    useEffect(() => {
      if (scriptLoaded) {
        setTimeout(() => {
          if (window.BroadbandLabelWidget && typeof window.BroadbandLabelWidget.renderNewOnly === "function") {
            console.log("Initializing broadband widget...");
            window.BroadbandLabelWidget.renderNewOnly();
          } else {
            console.error("BroadbandLabelWidget is still undefined, even after delay.");
          }
        }, 2000); // Extra delay to ensure execution
  
        return () => clearTimeout(); // Cleanup function
      }
    }, [scriptLoaded]);

    return (
        <Grid
            item
            key={tier.title}
            alignItems='center'
            justifyContent='center'
            xs={12}
            md={6}
        >
            <Box display="flex" justifyContent="center">
                <Card sx={{
                    width: {
                        xs: 300,
                        md: 350,
                    },
                    transition: 'transform 0.3s',
                    '&:hover': {
                        border: 'solid', 
                        borderColor: 'primary.main', 
                    },
                }}>
                    <CardHeader
                        title={tier.title}
                        titleTypographyProps={{
                            align: 'center',
                            sx: { minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }
                        }}
                        sx={{
                            backgroundColor: (theme) => theme.palette.grey[300]
                        }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2,
                            }}
                        >
                            <Typography component="h2" variant="h3" color="text.primary">
                                ${tier.price}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                /mo
                            </Typography>
                        </Box>
                        <ul>
                            {tier.description.map((line) => (
                                <Typography
                                    component="li"
                                    variant="subtitle1"
                                    align="left"
                                    key={line}
                                >
                                    {line}
                                </Typography>
                            ))}
                        </ul>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }} >
                        <Button onClick={() => {
                            setFormData({ ...formData, comments: tier.title });
                            setChosenTier(tier);
                        }}>
                            Select
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
                <Accordion sx={{ width: { xs: 300, md: 350 } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Broadband Facts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="cf_bcl_wc" data-label-id={tier.broadband_facts}></div>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Grid>
    );
};

export default PriceCard;
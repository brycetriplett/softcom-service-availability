import React from 'react'
import { Box, Button, Grid, Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';


const PriceCard = ({ tiers, formData, setFormData }) => {
  return (
    <Grid container rowSpacing={5} columnSpacing={8} alignItems='center' justifyContent='center' sx={{mt:1}}>
      {tiers.map((tier) => {
        return (<Grid
          item
          key={tier.title}
          alignItems='center'
          justifyContent='center'
          xs={12}
          md={4}
        >
          <Box display="flex" justifyContent="center">
            <Card sx={{
              width: {
                xs: 275,
                md: 400,
              },
              transition: 'transform 0.3s',
              '&:hover': {
                border: 'solid', 
                borderColor: 'primary.main', 
                borderWidth: 2,
                transform: 'scale(1.1)'
              },
            }}>
              <CardHeader
                title={tier.title}
                titleTypographyProps={{ align: 'center' }}
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
                <Button onClick={()=>setFormData({...formData, comments: tier.title})}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>)
      })}
    </Grid>
  )
}

export default PriceCard
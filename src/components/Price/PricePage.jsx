import { useEffect, useState } from 'react'
import { Zoom, Stack, Typography, Grid } from '@mui/material';

import PriceCard from './PriceCard'
import LoadingPage from '../LoadingPage';
import BaseTemplate from '../BaseTemplate';
import findMaxPrice from './findMaxPrice'


const PricePage = ({ formData, setFormData, setPage, setChosenTier }) => {
  const [loadTransitionState, setLoadTransitionState] = useState(true)
  const [mainTransitionState, setMainTransitionState] = useState(true)
  const [tierList, setTierList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    findMaxPrice(formData)
    .then((res)=>{
      console.log(res)
      setTierList(res)
      return setTimeout(()=>setLoadTransitionState(false), 1000)
    })
    .then(res=>clearTimeout(res))
    .catch(()=>setPage('error'))
  }, [])


  useEffect(() => {
    if (formData.comments) {
      setMainTransitionState(false);
    } 
  }, [formData]);


  return (
    <BaseTemplate activeStep={1} >
      {
        loading 

        ? <Zoom 
          in={loadTransitionState} 
          onExited={() => setLoading(false)}
        >
          <div><LoadingPage>Checking for service availability....</LoadingPage></div>
        </Zoom>

        : <Zoom 
            in={mainTransitionState}
            onExited={()=>setPage('confirmation')}
          >
            <div>
              <Stack spacing={2} sx={{ m: 8, alignItems: 'center' }}>
                <Typography variant="h4">Congrats! Service is available to you.</Typography>
                <Typography variant="h5" gutterBottom>Please select one of our available plans:</Typography>
              </Stack>
              <Grid container rowSpacing={5} columnSpacing={8} alignItems='center' justifyContent='center' sx={{mt:1}}>
              {Object.keys(tierList).map((key)=>
                <PriceCard
                  formData={formData}
                  setFormData={setFormData}
                  setChosenTier={setChosenTier}
                  tier={tierList[key]}
                  key={key}
                />
              )}
              </Grid>
            </div>
          </Zoom>
      }
    </BaseTemplate>
  )
}

export default PricePage
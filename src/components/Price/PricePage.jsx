import { useEffect, useState } from 'react'
import { Zoom, Stack, Typography } from '@mui/material';

import PriceCard from './PriceCard'
import LoadingPage from '../LoadingPage';
import BaseTemplate from '../BaseTemplate';
import TowerCoverageAPI from '../../api.js';
import tiers from './prices';


const PricePage = ({ formData, setFormData, setPage }) => {
  const [loadTransitionState, setLoadTransitionState] = useState(true)
  const [mainTransitionState, setMainTransitionState] = useState(true)
  const [prequalResult, setPrequalResult] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    TowerCoverageAPI(`EUSPrequalAPI`, formData)
      .then(res => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(res.data, "text/xml");
        const result = xmlDoc.getElementsByTagName('string')[0].innerHTML;
        
        setPrequalResult(result);
      })
      .then(()=>setLoadTransitionState(false))
      .then(()=>setTimeout(()=>setLoading(false), 1000))
      .catch(()=>setPage('error'))
  }, [])

  useEffect(() => {
    if (formData.comments) {
      setMainTransitionState(false);
      setTimeout(() => setPage('confirmation'), 1000);
    } 
  }, [formData]);


  return (
    <BaseTemplate activeStep={1} >
      {
        loading 

        ? <Zoom in={loadTransitionState}><div><LoadingPage>Checking for service availability....</LoadingPage></div></Zoom>

        : <Zoom in={mainTransitionState}>
            <div>
              <Stack spacing={2} sx={{ m: 8, alignItems: 'center' }}>
                <Typography variant="h4">Congrats! Service is available to you.</Typography>
                <Typography variant="h5" gutterBottom>Please select one of our available plans:</Typography>
              </Stack>
              <PriceCard 
                tiers={prequalResult === 'yes' ? tiers.main : tiers.alternative} 
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </Zoom>
      }
    </BaseTemplate>
  )
}

export default PricePage
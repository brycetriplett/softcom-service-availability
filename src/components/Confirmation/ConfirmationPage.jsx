import { useState } from 'react'
import { useEffect } from 'react'
import BaseTemplate from '../BaseTemplate'
import { Typography, Zoom, Stack } from '@mui/material'
import TowerCoverageAPI from '../../api'
import LoadingPage from '../LoadingPage'
import OrderConfirmation from './OrderConfirmation'
import prices from  '../Price/prices'


const ConfirmationPage = ({ formData, setPage }) => {
  const [loading, setLoading] = useState(true)
  const [loadTransitionState, setLoadTransitionState] = useState(true)
  const [orderNumber, setOrderNumber] = useState('')
  const [chosenTier, setChosenTier] = useState({})

  useEffect(()=>{
    TowerCoverageAPI(`EUSsubmisssion`, formData)
      .then(res => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(res.data, "text/xml");
        const result = xmlDoc.getElementsByTagName('string')[0].innerHTML;
        
        return result
      })
      .then((res)=>setOrderNumber(res))
      .then(()=>setLoadTransitionState(false))
      .then(()=> setChosenTier(locateChosenTier(formData.comments)))
      .then(console.log(chosenTier))
      .then(()=>setTimeout(()=>setLoading(false), 1000))
      .catch(()=>setPage('error'))
  }, [])

  const locateChosenTier = (tierName) => {
    let combinedList = [...prices.main, ...prices.alternative]
    return combinedList.find(tier => tier.title === tierName)
  }

  return (
    <BaseTemplate activeStep={2}>
      {
        loading
        ? <Zoom in={loadTransitionState}><div><LoadingPage>Creating Order..... </LoadingPage></div></Zoom>
        : <Zoom in={true}><div>
        <Stack spacing={2} sx={{ m: 8, alignItems: 'center' }}>
          <Typography variant="h4">Your order has been placed</Typography>
          <Typography variant="h5" gutterBottom>Our customer service team will be in touch with you soon</Typography>
        </Stack>
        <OrderConfirmation orderNumber={orderNumber} formData={formData} chosenTier={chosenTier} />
        </div></Zoom>
      }
    </BaseTemplate>
  )
}

export default ConfirmationPage
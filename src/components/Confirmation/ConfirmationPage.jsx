import { useState, useEffect } from 'react'
import { Typography, Zoom, Stack } from '@mui/material'

import { towerCoverageAPI, parseResponse } from '../../api'
import LoadingPage from '../LoadingPage'
import OrderConfirmation from './OrderConfirmation'
import BaseTemplate from '../BaseTemplate'


const ConfirmationPage = ({ formData, setPage, chosenTier }) => {
  const [loading, setLoading] = useState(true)
  const [loadTransitionState, setLoadTransitionState] = useState(true)
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(()=>{
    towerCoverageAPI(`EUSsubmisssion`, formData)
      .then(res=>parseResponse(res.data))
      .then(res=>setOrderNumber(res))
      .catch(()=>setPage('error'))
  }, [])

  useEffect(()=>{
    if (orderNumber.length > 0) {
      setTimeout(()=>setLoadTransitionState(false), 1000)
    }
  }, [orderNumber])


  return (
    <BaseTemplate activeStep={2}>
      {
        loading
        ? <Zoom 
            in={loadTransitionState} 
            onExited={()=>setLoading(false)}
          >
            <div><LoadingPage>Creating Order..... </LoadingPage></div>
          </Zoom>
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
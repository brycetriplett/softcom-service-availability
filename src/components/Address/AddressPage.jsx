import { Fade, Zoom } from '@mui/material'
import { useState } from 'react';
import { AddressCard, BaseTemplate } from '..';


const AddressPage = ({ setFormData, setPage }) => {
  const [transitionState, setTransitionState] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let result = {
      'multicoverageid': process.env.REACT_APP_MULTICOVERAGE_ID,
      'account': process.env.REACT_APP_ACCOUNT,
      'key': process.env.REACT_APP_KEY,
      'country': 'United States',
      'howdidyouhear': 'website',
      'preferredmethod': 'any',
      'besttimetocontact': 'business hours',
      'clientip': '',
      'latitude': '',
      'longitude': '',
      'RxMargin': ''
    };

    for (const [key, value] of data.entries()) {
      result[key] = value;
    }

    setFormData(result);
    setTransitionState(false);
    setTimeout(()=> setPage('price'), 1000)
  }
  

  return (
    <Fade in={true}>
      <div>
        <BaseTemplate activeStep={0}>
          <Zoom in={transitionState}>
            <div>
              <AddressCard handleSubmit={handleSubmit} />
            </div>
          </Zoom>
        </BaseTemplate>
      </div>
    </Fade>
  )
}

export default AddressPage
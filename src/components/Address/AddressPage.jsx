import { Fade, Zoom } from '@mui/material'
import { useState } from 'react';
import { AddressCard, BaseTemplate } from '..';
import { formData } from '../../api'
//

const AddressPage = ({ setFormData, setPage }) => {
  const [transitionState, setTransitionState] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let result = {...formData};

    for (const [key, value] of data.entries()) {
      result[key] = value;
    }

    setFormData(result);
    setTransitionState(false)
  }
  

  return (
    <Fade in={true}>
      <div>
        <BaseTemplate activeStep={0}>
          <Zoom in={transitionState} onExited={()=>setPage('price')}>
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
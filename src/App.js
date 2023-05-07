import { useState } from 'react'
import { AddressPage, PricePage, ConfirmationPage, ErrorPage } from './components';


const App = () => {
    const [formData, setFormData] = useState({});
    const [chosenTier, setChosenTier] = useState({})
    const [page, setPage] = useState('address');

    if (page === 'address') {
        return <AddressPage setFormData={setFormData} setPage={setPage} />
    }

    else if (page === 'price') {
        return <PricePage formData={formData} setFormData={setFormData} setChosenTier={setChosenTier} setPage={setPage} />
    }

    else if (page === 'confirmation') {
        return <ConfirmationPage formData={formData} chosenTier={chosenTier} setPage={setPage} />
    }
    
    else if (page === 'error') {
        return <ErrorPage />
    }
}

export default App
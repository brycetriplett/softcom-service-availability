import { useState } from 'react'
import { AddressPage, PricePage, ConfirmationPage, ErrorPage } from './components';


const App = () => {
    const [formData, setFormData] = useState({});
    const [page, setPage] = useState('address');

    if (page === 'address') {
        return <AddressPage setFormData={setFormData} setPage={setPage} />
    }

    else if (page === 'price') {
        return <PricePage formData={formData} setFormData={setFormData} setPage={setPage} />
    }

    else if (page === 'confirmation') {
        return <ConfirmationPage formData={formData} setPage={setPage} />
    }
    
    else if (page === 'error') {
        return <ErrorPage />
    }
}

export default App
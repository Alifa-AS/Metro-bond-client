import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from your API 
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/bioData');
                const result = await response.json();
                setData(result); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='py-16'>
             <SectionTitle heading="Payment" subHeading="pay for Premium member"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm  data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
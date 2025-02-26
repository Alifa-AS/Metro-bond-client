import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


//TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from your API (e.g., bioData)
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/bioData'); // Replace with your endpoint
                const result = await response.json();
                setData(result); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
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
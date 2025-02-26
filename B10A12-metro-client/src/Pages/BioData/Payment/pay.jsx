import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    // const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {amount: 500})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    })

    if(error){
        console.log('payment error', error);
        setError(error.message);
    }
    else{
        console.log('payment method', paymentMethod);
        setError('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
    >
      <div className="mb-4">
        <CardElement
          className="p-3 border rounded-lg shadow-sm bg-gray-50"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#333",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#e3342f" },
            },
          }}
        />
      </div>
      <button
        className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition disabled:bg-gray-400"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;

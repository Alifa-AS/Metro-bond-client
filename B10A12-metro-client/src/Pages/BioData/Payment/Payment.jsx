import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [data, setData] = useState(null);
  // console.log(data);
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();
 
  // useEffect(() => {
  //     // Fetch data from your API
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('http://localhost:5000/bioData');
  //             const result = await response.json();
  //             setData(result);
  //             console.log(result);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  useEffect(() => {
    axiosSecure
      .get(`/biodata/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, [id, axiosSecure]);

  return (
    <div className="py-16">
      <SectionTitle
        heading="Payment"
        subHeading="pay for Premium member"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
        {data ? <CheckOutForm data={data} /> : <p>Loading...</p>}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

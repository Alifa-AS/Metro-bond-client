import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

const CheckoutForm = ({ data }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transitionId, setTransitionId] = useState("");

  const totalPrice = 500; // Amount in cents ($5.00)
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!totalPrice || isNaN(totalPrice) || totalPrice < 500) {
      // Ensure minimum of $5
      setClientSecret("");
      return;
    }

    // Use axiosSecure to fetch client secret
    if (totalPrice) {
      axiosSecure
        .post("/create-payment-intent", { amount: totalPrice }) // Use 'amount' here
        .then((res) => {
          if (res.data.clientSecret) {
            console.log("Client Secret:", res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          } else {
            console.error("No clientSecret received:", res);
          }
        })
        .catch((error) => console.error("Error fetching clientSecret:", error));
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentMethodError) {
      console.log("Payment method error:", paymentMethodError);
      setError(paymentMethodError.message);
      return;
    } else {
      console.log("Payment method:", paymentMethod);
      setError("");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error", confirmError);
      setError(confirmError.message);
    } else {
      console.log(paymentIntent);
      setError("");
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction id:", paymentIntent.id);
        setTransitionId(paymentIntent.id);
        {
          transitionId && (
            <p className="text-green-500">Transaction Id: {transitionId}</p>
          );
        }

        // Save the payment information in the database using axiosSecure
        const payment = {
          email: user?.email,
          transitionId: paymentIntent.id,
          amount: totalPrice,
          date: new Date(), 
          bioDataId: data._id,
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Successfully Payment",
          icon: "success",
        });
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="form-control my-5">
          <div>
            <h1 className="text-gray-500">Pay $5 for premium</h1>
          </div>
        </div>

        <CardElement
          className="p-3 my-5 border rounded-lg shadow-sm bg-gray-50"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition disabled:bg-gray-400"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          {loading ? "Processing..." : "Pay"}
        </button>

        {error && <p className="text bg-red-600">{error}</p>}
      </form>
      {transitionId && <p>Your transaction id: {transitionId}</p>}
    </div>
  );
};

export default CheckoutForm;

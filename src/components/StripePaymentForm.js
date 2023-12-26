import React, { useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";
import keys from "../configs/keys";

const stripe = new Stripe(keys.stripeSecretKey);

const completePayment = async (id, amount) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Payment",
      payment_method: id,
      confirm: true,
      return_url: "http://localhost:3000/stripePayment",
    });

    console.log("Payment", payment);

    console.log({
      message: "Payment was successful",
      success: true,
    });
    return true;
  } catch (error) {
    console.log("Error", error);
    console.log({
      message: "Payment Failed",
      success: false,
    });
    return false;
  }
};

export default function StripePaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await completePayment(id, 10000);

        if (response) {
          console.log("Successful Payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <CardNumberElement />
          </fieldset>
          <fieldset>
            <CardExpiryElement />
          </fieldset>
          <fieldset>
            <CardCvcElement />
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Payment successful</h2>
          <h3>Thank you </h3>
        </div>
      )}
    </>
  );
}

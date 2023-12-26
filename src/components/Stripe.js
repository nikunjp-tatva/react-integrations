import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "./StripePaymentForm";
import getStripe from "../lib/getStripe";

const stripe = await getStripe();

export default function Stripe() {
  return (
    <Elements stripe={stripe}>
      <StripePaymentForm />
    </Elements>
  );
}

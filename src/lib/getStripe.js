import { loadStripe } from "@stripe/stripe-js";
import keys from "../configs/keys";

let stripePromise;
export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(keys.stripePublicKey);
  }
  return stripePromise;
}

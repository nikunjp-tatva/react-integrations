import getStripe from "../lib/getStripe";
import keys from "../configs/keys";

export default function PaymentForm() {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: keys.stripeItemID,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `http://localhost:3000/?success`,
      cancelUrl: `http://localhost:3000/?cancel`,
      customerEmail: "test@email.com",
    });
    console.warn(error.message);
  }

  return <button onClick={handleCheckout}>Checkout</button>;
}

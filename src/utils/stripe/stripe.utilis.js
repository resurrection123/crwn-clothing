//viene eseguito per far sapere che questa è la nostra istanza di stripe
import { loadStripe } from "@stripe/stripe-js";
//richiamiamo la variabile definità all'interno del file .env 
export const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
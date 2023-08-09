import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.componet";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store//user/user.selector";
import { selectCartTotal } from "../../store//cart/cart.selector";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    }).then((resp) => {
      return resp.json();
    });
    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser : "Guest",
        },
      },
    });
    setProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credi Card Payment:</h2>
        <CardElement />
        <Button
          disabled={isProcessingPayment}
          text="Pay Now"
          classButton="inverted"
        ></Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

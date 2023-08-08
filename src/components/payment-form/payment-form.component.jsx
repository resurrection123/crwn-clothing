import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.componet";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  };
  return (
    <PaymentFormContainer>
      <FormContainer onClick={paymentHandler}>
        <h2>Credi Card Payment:</h2>
        <CardElement />
        <Button text="Pay Now" classButton="inverted"></Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

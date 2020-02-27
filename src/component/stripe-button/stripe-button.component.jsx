import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = token => {
        console.log(token);
        alert("Payment is successful.");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            panelLabel="Pay Now"
            name="Aihua E-Clothing Store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            currency="AUD"
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    return (
        <StripeCheckout
            label='pay now'
            name='CRWN clothing Pty.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='pay now'
            
        />
    )
}

export default StripeCheckoutButton

import StripeCheckout from 'react-stripe-checkout';

import React from 'react'

const StripeCheckoutButton = ({price}) => { 
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    
    const onToken = token => {
        console.log(token);
        alert(' Payment Successful ');   
    }

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
            token={onToken}
            stripeKey={publishableKey}
            
        />
    )
}

export default StripeCheckoutButton;

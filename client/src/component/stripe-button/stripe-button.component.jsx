import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { clearAll } from "../../redux/cart/cart.actions";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

function StripeCheckoutButton({ price, clearAll, history }) {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    // const publishableKey = 'pk_test_SP84HXlGG6DAhu2Kd0GzxKrh00r9qB0g62';

    // console.log('publishableKey: ', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const onToken = token => {
        console.log(token);
        alert("Payment is successful.");
    };

    const onClose = () => {
        clearAll();
        history.push('/');
    }

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
            closed={onClose}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    clearAll: () => dispatch(clearAll())
})

export default withRouter( connect(null, mapDispatchToProps) (StripeCheckoutButton));

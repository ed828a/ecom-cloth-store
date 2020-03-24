import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { clearAll } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { updateCurrentUserCartItems } from "../../firebase/firebase.utils";

function StripeCheckoutButton({ price, clearAll, history, currentUser }) {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

    const onToken = token => {
        // console.log('token: ', token);
        axios({
            url: "/payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert("Payment is successful !, Thanks ");
                setIsPaymentSuccess(true);
            })
            .catch(error => {
                setIsPaymentSuccess(false);
                console.error("Payment error: ", error);
                alert(
                    "There was an issue with your payment, please sure that you use the provided credit card."
                );
            });
    };

    const onClose = () => {
        if (isPaymentSuccess) {
            clearAll();
            const cartItems = [];
            updateCurrentUserCartItems(currentUser.id, cartItems);
            history.push("/");
        }
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
            closed={onClose}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    clearAll: () => dispatch(clearAll()),
    updateCurrentUserCartItems: (uid, cartItems) => dispatch(updateCurrentUserCartItems({uid, cartItems}))
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
);

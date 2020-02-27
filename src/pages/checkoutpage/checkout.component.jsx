import "./checkout.scss";

import React from "react";
import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartTotal
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckOutItem from "../../component/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartTotal }) => {
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>produce</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div className="total">
                <span>Total: ${cartTotal}</span>
            </div>

            <StripeCheckoutButton price={cartTotal} />
            
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
            </div>
            
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

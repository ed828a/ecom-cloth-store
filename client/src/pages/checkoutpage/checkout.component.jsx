import React from "react";
import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartTotal
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CheckOutItem from "../../component/checkout-item/checkout-item.component";
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from "./checkout.styles";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";



const CheckoutPage = ({ cartItems, cartTotal }) => {
    
    return (
        <CheckoutPageContainer >
            <CheckoutHeaderContainer >
                <HeaderBlockContainer className="header-block">
                    <span>produce</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>

            {cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <TotalContainer className="total">
                <span>Total: ${cartTotal}</span>
            </TotalContainer>

            <StripeCheckoutButton price={cartTotal} />
            
            <TestWarningContainer >
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
            </TestWarningContainer>
            
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

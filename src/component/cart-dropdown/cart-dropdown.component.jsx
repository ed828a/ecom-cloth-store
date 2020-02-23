import "./cart-dropdown.scss";

import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom"; // the reason that we use withRouter is because this component and its all parent components are not inside Switch section, not wrapped by Route tag.
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    if (cartItems.length) {
                        dispatch(toggleCartHidden()); // shortcut of dispatch
                        history.push("/checkout");
                    } else {
                        alert("Please select some items before checking out.");
                    }
                }}
            >
                Go to checkout
            </CustomButton>
        </div>
    );
};

// const mapStateToProps = state => {
//     // const {cart: { cartItems }} = state;
//     return {
//         cartItems: selectCartItems(state)
//     };
// };

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
// );
export default withRouter(
    connect(mapStateToProps)(CartDropdown)
);

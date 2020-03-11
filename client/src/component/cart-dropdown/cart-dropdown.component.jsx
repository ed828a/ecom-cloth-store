import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom"; // the reason that we use withRouter is because this component and its all parent components are not inside Switch section, not wrapped by Route tag.
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartDropdownContainer, CartItemsContainer, GoToCheckoutContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

// const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer >
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer className="empty-message">your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <GoToCheckoutContainer
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
            </GoToCheckoutContainer>
        </CartDropdownContainer>
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

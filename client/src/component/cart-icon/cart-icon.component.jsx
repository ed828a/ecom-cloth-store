import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect'
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styles";

function CartIcon({ toggleCartHidden, itemCount }) {
    // console.log('I am being called');
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer />
            <ItemCountContainer >{itemCount} </ItemCountContainer>
        </CartIconContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = (state) => {
//     // console.log('I am being called');
//     // const { cart: { cartItems } } = state

//     return ({
//         // itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
//         //     return accumulatedQuantity + cartItem.quantity;
//         // }, 0)
//         itemCount: selectCartItemsCount(state)
//     });
// };
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

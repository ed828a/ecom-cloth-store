import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect'

function CartIcon({ toggleCartHidden, itemCount }) {
    // console.log('I am being called');
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount} </span>
        </div>
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

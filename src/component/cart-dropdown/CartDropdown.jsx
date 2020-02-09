import "./cart-dropdown.scss";

import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, /* toggleCartHidden, */ dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => { 
                    // toggleCartHidden();
                    dispatch(toggleCartHidden());
                    history.push("/checkout");
                }}
            >
                go to checkout
            </CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

export default withRouter(
    connect(mapStateToProps)(CartDropdown)
    // connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

/* connect passes dispatch into our components as a prop if we don't supply the second argument to connect. so we can get dispatch from porps as a property. if we neeed to make one off action dispatches, there's no reason to write another map dispatch to props, as it is more verbose. so we have a shorthand of action dispatch, which is: 
 1. we get dispatch function directly from props if the component is High Ordered by connect
 2. import the action
 3. at where this action need be fired, just add dispatch(imported-action); like the code above.

*/

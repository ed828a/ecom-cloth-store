import { CartActionTypes } from './cart.types';
import { addItemToCart, clearItemFromCart, increaseQuantity, decreaseQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, INCREASE, DECREASE, CLEAR_ALL } = CartActionTypes;

    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }

        case INCREASE:
            return {
                ...state,
                cartItems: increaseQuantity(state.cartItems, action.payload)
            }

        case DECREASE:
            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }

        case CLEAR_ALL:
            return INITIAL_STATE

        default:
            return state;
    }
};

export default cartReducer;
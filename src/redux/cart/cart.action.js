import { CartActionTypes } from './cart.types';

// because it's just a toggle, we don't need payload here.
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});


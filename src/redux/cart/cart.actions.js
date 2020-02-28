import { CartActionTypes } from './cart.types';

const {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    INCREASE,
    DECREASE,
    REMOVE_ITEM,
    CLEAR_ALL
} = CartActionTypes;

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});
// no payload for toggle things

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const clearItem = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});

export const increase = item => ({
    type: INCREASE,
    payload: item
});

export const decrease = item => ({
    type: DECREASE,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearAll = () => ({
    type: CLEAR_ALL
})

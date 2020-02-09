import { createSelector } from 'reselect';

// there are two types of selector that we can write:
// input selector, which doesn't use createSelector
// output selector, which use input selector and createSelector to build itself

// input selector is a function naming selectXXX, take whole state, and returns a slice of it, usually just one layer depth.
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart], // input selectors array
    // second parameter is a function that the parameters are in order of input selectors array, and return the output value we expect.
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);


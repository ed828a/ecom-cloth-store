import { CartActionTypes } from './cart.types';

// because it's just a toggle, we don't need payload here.
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
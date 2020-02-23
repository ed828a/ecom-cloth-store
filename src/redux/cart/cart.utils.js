// Utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location.
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]; // add quantity property to every first item added to the cart 
    }

}
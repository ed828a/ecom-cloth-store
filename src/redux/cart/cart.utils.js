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
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; // add quantity property to every first item added to the cart 
    }
}

export const clearItemFromCart = (cartItems, clearItem) => {
    return cartItems.filter(cartItem => cartItem.id !== clearItem.id)
};

export const increaseQuantity = (cartItems, itemIncreased) => {
    // no need to check if this item is in the cartItems
    return cartItems.map(item => item.id === itemIncreased.id ? { ...item, quantity: item.quantity + 1 } : item)
};

export const decreaseQuantity = (cartItems, itemDecreased) => {
    return (itemDecreased.quantity === 1) ?
        cartItems.filter(item => item.id !== itemDecreased.id)
        :
        cartItems.map(item => item.id === itemDecreased.id ? { ...item, quantity: item.quantity - 1 } : item);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(item =>
            item.id === cartItemToRemove.id ?
                { ...item, quantity: item.quantity - 1 } : item);
    }
}


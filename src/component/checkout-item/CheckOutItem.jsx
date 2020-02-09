import './checkout-item.scss';

import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.action';


function CheckOutItem({ cartItem, removeItemFromCart }) {
    
    const {imageUrl, name, quantity, price} = cartItem;

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}> &#10005; </div>
               
        </div>
    )
}

const mapDispatchToPorps = dispatch => ({
    removeItemFromCart: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToPorps)(CheckOutItem);
 
import "./checkout-item.scss";

import React from "react";
import { clearItem, increase, addItem, decrease } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

function CheckOutItem({ cartItem, clearItem, increaseQuantity, decreaseQuantity }) {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name} </span>
            <span className="quantity">
                <span className='arrow' onClick={() => decreaseQuantity(cartItem)} >&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={ () => increaseQuantity(cartItem) } >&#10095;</span>
                </span>
            <span className="price">{price} </span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>
                {" "}
                &#10005;{" "}
            </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    increaseQuantity: item => dispatch(increase(item)),
    decreaseQuantity: item => dispatch(decrease(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);

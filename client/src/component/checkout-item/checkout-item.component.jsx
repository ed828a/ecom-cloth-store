import React from "react";
import { connect } from "react-redux";

import {
    clearItem,
    increase,
    decrease
} from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    ImageContainer,
    NamePriceContainer,
    QuantityContainer,
    RemoveButtonContainer
} from "./checkout-item.styles";

function CheckOutItem({
    cartItem,
    clearItem,
    increaseQuantity,
    decreaseQuantity
}) {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <NamePriceContainer>{name} </NamePriceContainer>
            <QuantityContainer>
                <span
                    className="arrow"
                    onClick={() => decreaseQuantity(cartItem)}
                >
                    &#10094;
                </span>
                <span className="value">{quantity}</span>
                <span
                    className="arrow"
                    onClick={() => increaseQuantity(cartItem)}
                >
                    &#10095;
                </span>
            </QuantityContainer>
            <NamePriceContainer>{price} </NamePriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                {" "}
                &#10005;{" "}
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    increaseQuantity: item => dispatch(increase(item)),
    decreaseQuantity: item => dispatch(decrease(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);

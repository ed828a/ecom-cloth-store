// import "./collection-item.scss";

import React from "react";
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";
import {
    CollectionItemContainer,
    CollectionItemImage,
    CollectionItemFooter,
    AddToCartButtonContainer,
    NameContainer,
    PriceContainer
} from "./collection-item.styles";


function CollectionItem({ item, addItem }) {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                className="collection-item-image"
                imageUrl={imageUrl}
            />
            <CollectionItemFooter >
                <NameContainer >{name} </NameContainer>
                <PriceContainer >{price} </PriceContainer>
            </CollectionItemFooter>
            <AddToCartButtonContainer className='custom-button' inverted onClick={() => addItem(item)} >Add to cart</AddToCartButtonContainer>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
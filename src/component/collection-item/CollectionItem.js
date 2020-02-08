import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

function CollectionItem({ item, addItem }) {
    const {  name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className="collection-item-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className="collection-item-footer">
                <span className='name' >{name} </span>
                <span className='price' >{price} </span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

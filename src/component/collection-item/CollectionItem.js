import React from 'react'
import './collection-item.scss'

function CollectionItem({ imageUrl, name, price }) {
    return (
        <div className='collection-item'>
            <div
                className="collection-item-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <button className='collection-item-button' >add to cart</button>
            <div className="collection-item-footer">
                <span className='name' >{name} </span>
                <span className='price' >{price} </span>
            </div>
        </div>
    )
}

export default CollectionItem;

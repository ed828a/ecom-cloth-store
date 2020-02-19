import './collection-item.scss';

import React from 'react'

function CollectionItem({name, price, imageUrl}) {
    return (
        <div className='collection-item'>
            <div 
            className="collection-item-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection-item-footer">
                <span className="name">{name} </span>
                <span className="price">{price} </span>
            </div>
        </div>
    )
}

export default CollectionItem;
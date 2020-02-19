import './collection-preview.scss';
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

function CollectionPreview({ title, items }) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4 )
                    .map(({id, ...restItemProps}) => (
                    <CollectionItem key={id} {...restItemProps} />
                    ))                        
                } 
            </div>
        </div>
    )
}

export default CollectionPreview
import React from 'react'
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.scss';

export default function CollectionPreview({ title, items }) {
    
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4) // because this method runs everytime when Collection render / re-render, so if the array is big, this will cause the proformance issue.
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

import React from 'react';
import CollectionPreview from '../../component/collection-preview/CollectionPreview';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...restCollectionProps }) => (
                <CollectionPreview
                    key={id}
                    {...restCollectionProps}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);

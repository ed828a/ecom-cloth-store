import './collections-overview.scss';

import React from 'react'
import CollectionPreview from "../../component/collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

function CollectionsOverview({ collections }) {
    return (
        <div className='collections-overview'>
            {Object.keys(collections)
                .map(key => collections[key])
                .map(({ id, ...restCollectionProps }) => (
                    <CollectionPreview key={id} {...restCollectionProps} />
                ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);

import "./collections-overview.scss";

import React from "react";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// Object.keys(An-Object) returns the array of keys of the object
function CollectionsOverview({ collections }) {
    console.log('collections.length: ', collections.length);

    return (
        <div className="collections-overview">
            {/* {Object.keys(collections)   
                .map(key => collections[key]) */}
            {collections.map(({ id, ...restCollectionProps }) => (
                <CollectionPreview key={id} {...restCollectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

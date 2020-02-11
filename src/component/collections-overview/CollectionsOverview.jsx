import "./collections-overview.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
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

import "./collection-page.scss";

import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../component/collection-item/collection-item.component";

function CollectionPage({ collection }) {
    const { items, title } = collection;
    // console.log("collection: ", collection);
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="collection">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

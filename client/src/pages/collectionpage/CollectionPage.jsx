import "./collection-page.scss";

import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../component/collection-item/CollectionItem";

// function CollectionPage({ match, collection: { title, items } }) {
function CollectionPage({ match, collection: { title, items } }) {
    // console.log("match: ", match.param.collectionId);

    return (
        <div className="collection-page">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="collection">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

// ownProps: is the props of the component that we're wrapping
// because selectCollection is an arrow function which returns createSelector call, 
// and this returning call is a function which take state and process through the selectors in shop.selector.js
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

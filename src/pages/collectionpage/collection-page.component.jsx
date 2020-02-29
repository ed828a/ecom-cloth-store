import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../component/collection-item/collection-item.component";
import {
    CollectionPageContainer,
    CollectionPageTitleContainer,
    CollectionContainer
} from "./collection-page.styles";

function CollectionPage({ collection }) {
    const { items, title } = collection;
    // console.log("collection: ", collection);
    return (
        <CollectionPageContainer>
            <CollectionPageTitleContainer>{title}</CollectionPageTitleContainer>
            <CollectionContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionContainer>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
